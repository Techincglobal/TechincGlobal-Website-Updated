"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { assessmentQuestions } from "@/content/assessment";

type Answer = Record<number, string>;

function ScoreResult({ answers }: { answers: Answer }) {
    // Calculate score dynamically based on number of options
    const total = Object.entries(answers).reduce((sum, [qi, answer]) => {
        const score = parseInt(answer.split("-")[0], 10);
        return sum + (isNaN(score) ? 1 : score);
    }, 0);

    const maxScore = Object.entries(answers).reduce((sum, [qi]) => {
        const question = assessmentQuestions.find((q) => q.id === Number(qi));
        if (!question) return sum;
        const maxOpt = Math.max(...question.options.map(o => parseInt(o.value.split("-")[0], 10)));
        return sum + (maxOpt > 0 ? maxOpt : 3);
    }, 0);
    const pct = Math.round((total / maxScore) * 100);

    let tier: { title: string; color: string; bg: string; desc: string; cta: string };
    if (pct >= 70) {
        tier = {
            title: "High Readiness",
            color: "text-brand-blue",
            bg: "bg-brand-blue-pale",
            desc: "Your business shows strong indicators of ERP readiness. You have the process maturity, stakeholder alignment, and data quality needed for a successful implementation. Let's get started.",
            cta: "Book Your Implementation Kickoff",
        };
    } else if (pct >= 40) {
        tier = {
            title: "Moderate Readiness",
            color: "text-brand-teal",
            bg: "bg-teal-50",
            desc: "You're on the right track. Some foundational work — improving data quality, aligning stakeholders, or mapping key processes — will set you up for a smoother implementation. Our advisory service can help.",
            cta: "Book an Advisory Session",
        };
    } else {
        tier = {
            title: "Early Stage",
            color: "text-amber-600",
            bg: "bg-amber-50",
            desc: "ERP transformation may be a 6–12 month journey from your current position. We recommend starting with an advisory engagement to map your processes, clean your data, and build internal buy-in before implementation begins.",
            cta: "Book a Discovery Session",
        };
    }

    return (
        <div className="space-y-8">
            {/* Score display */}
            <div className={`rounded-2xl ${tier.bg} p-8 text-center`}>
                <p className={`text-6xl font-bold ${tier.color}`}>{pct}%</p>
                <p className={`mt-2 text-xl font-bold ${tier.color}`}>{tier.title}</p>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-secondary">
                    {tier.desc}
                </p>
            </div>

            {/* Sub-scores */}
            <div className="rounded-2xl border border-surface-border bg-surface p-6">
                <p className="font-semibold text-text-primary">Score Breakdown</p>
                <div className="mt-4 space-y-3">
                    {Object.entries(answers).map(([qi, answer]) => {
                        const question = assessmentQuestions.find((q) => q.id === Number(qi));
                        const score = parseInt(answer.split("-")[0], 10);
                        const maxOpt = question ? Math.max(...question.options.map(o => parseInt(o.value.split("-")[0], 10))) : 3;
                        return question ? (
                            <div key={qi} className="flex items-center justify-between gap-4">
                                <p className="flex-1 text-sm text-text-secondary">{question.shortTitle}</p>
                                <div className="flex gap-1">
                                    {Array.from({ length: maxOpt }, (_, i) => i + 1).map((s) => (
                                        <span
                                            key={s}
                                            className={`h-2.5 w-6 rounded-full ${s <= score ? "bg-brand-blue" : "bg-surface-border"}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : null;
                    })}
                </div>
            </div>

            {/* CTA */}
            <div className="text-center">
                <p className="text-sm text-text-secondary">
                    Share your results with a TECHINCGLOBAL consultant to get specific, personalized recommendations.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button size="lg" asChild>
                        <Link href="/contact">{tier.cta}</Link>
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => window.location.reload()}>
                        Retake Assessment
                    </Button>
                </div>
            </div>
        </div>
    );
}

export function AssessmentWidget() {
    const [currentQ, setCurrentQ] = useState(0);
    const [answers, setAnswers] = useState<Answer>({});
    const [completed, setCompleted] = useState(false);

    const question = assessmentQuestions[currentQ];
    const progress = ((currentQ) / assessmentQuestions.length) * 100;

    function handleAnswer(value: string) {
        const newAnswers = { ...answers, [question.id]: value };
        setAnswers(newAnswers);

        if (currentQ < assessmentQuestions.length - 1) {
            setCurrentQ(currentQ + 1);
        } else {
            setCompleted(true);
        }
    }

    function handleBack() {
        if (currentQ > 0) setCurrentQ(currentQ - 1);
    }

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-hero-gradient section-padding-sm">
                <Container size="md" className="text-center">
                    <FadeUp>
                        <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">Free Tool</p>
                        <h1 className="mt-3 text-display-md font-bold text-white">
                            ERP Readiness Assessment
                        </h1>
                        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
                            {assessmentQuestions.length} questions · Under 5 minutes · Free instant score
                        </p>
                    </FadeUp>
                </Container>
            </section>

            {/* Assessment */}
            <section className="section-padding">
                <Container size="md">
                    <FadeUp>
                        {!completed ? (
                            <div>
                                {/* Progress bar */}
                                <div className="mb-8">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="font-semibold text-text-primary">
                                            Question {currentQ + 1} of {assessmentQuestions.length}
                                        </span>
                                        <span className="text-text-muted">{Math.round(progress)}% complete</span>
                                    </div>
                                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface-border">
                                        <div
                                            className="h-full rounded-full bg-brand-blue transition-all duration-300"
                                            style={{ width: `${progress}%` }}
                                            role="progressbar"
                                            aria-valuenow={Math.round(progress)}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>

                                {/* Category */}
                                <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                                    {question.category}
                                </p>

                                {/* Question */}
                                <h2 className="mt-3 text-xl font-bold text-text-primary sm:text-2xl">
                                    {question.text}
                                </h2>
                                {question.context && (
                                    <p className="mt-2 text-sm text-text-secondary">{question.context}</p>
                                )}

                                {/* Options */}
                                <div className="mt-8 grid gap-3">
                                    {question.options.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => handleAnswer(option.value)}
                                            className="group rounded-xl border border-surface-border bg-surface p-4 text-left shadow-soft transition-all hover:border-brand-blue/40 hover:shadow-card-hover"
                                        >
                                            <p className="font-semibold text-text-primary group-hover:text-brand-blue transition-colors">
                                                {option.label}
                                            </p>
                                            {option.detail && (
                                                <p className="mt-1 text-sm text-text-secondary">{option.detail}</p>
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {/* Back button */}
                                {currentQ > 0 && (
                                    <div className="mt-6">
                                        <button
                                            onClick={handleBack}
                                            className="text-sm text-text-muted transition-colors hover:text-text-primary"
                                        >
                                            ← Go back
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <ScoreResult answers={answers} />
                        )}
                    </FadeUp>
                </Container>
            </section>
        </div>
    );
}
