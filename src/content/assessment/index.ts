export type AssessmentQuestion = {
    id: number;
    category: string;
    text: string;
    shortTitle: string;
    context?: string;
    options: {
        value: string; // starts with number for scoring
        label: string;
        detail?: string;
    }[];
};

export const assessmentQuestions: AssessmentQuestion[] = [
    {
        id: 1,
        category: "System Status",
        text: "What is your current ERP system status?",
        shortTitle: "ERP Status",
        options: [
            { value: "1-spreadsheets", label: "No ERP system currently", detail: "Using spreadsheets or manual processes" },
            { value: "2-legacy", label: "Legacy ERP system", detail: "Outdated system requiring upgrade" },
            { value: "3-disconnected", label: "Multiple disconnected systems", detail: "Need for system integration" },
            { value: "4-modern", label: "Modern ERP but needs customization", detail: "Current system lacks specific features" },
        ],
    },
    {
        id: 2,
        category: "Company Profile",
        text: "What is your company size?",
        shortTitle: "Company Size",
        options: [
            { value: "1-small", label: "Small (1-50 employees)" },
            { value: "2-medium", label: "Medium (51-200 employees)" },
            { value: "3-large", label: "Large (201-1000 employees)" },
            { value: "4-enterprise", label: "Enterprise (1000+ employees)" },
        ],
    },
    {
        id: 3,
        category: "Business Scope",
        text: "What are your primary business processes that need improvement?",
        shortTitle: "Improvements Needed",
        options: [
            { value: "1-finance", label: "Financial management & accounting" },
            { value: "2-inventory", label: "Inventory & supply chain management" },
            { value: "3-crm", label: "Customer relationship management" },
            { value: "4-manufacturing", label: "Manufacturing" },
            { value: "5-services", label: "Professional services automation" },
            { value: "6-all", label: "All of the above" },
        ],
    },
    {
        id: 4,
        category: "Digital Readiness",
        text: "What is your digital maturity level?",
        shortTitle: "Digital Maturity",
        options: [
            { value: "1-manual", label: "Mostly manual processes" },
            { value: "2-some", label: "Some digital tools but disconnected" },
            { value: "3-disconnected", label: "Multiple systems with limited integration" },
            { value: "4-advanced", label: "Advanced digital infrastructure" },
        ],
    },
    {
        id: 5,
        category: "Project Timeline",
        text: "What is your implementation timeline preference?",
        shortTitle: "Target Timeline",
        options: [
            { value: "1-none", label: "No specific timeline" },
            { value: "2-12m", label: "Within 12 months" },
            { value: "3-6m", label: "Within 6 months" },
            { value: "4-asap", label: "As soon as possible" },
        ],
    },
    {
        id: 6,
        category: "Financials",
        text: "What is your budget allocation for ERP implementation?",
        shortTitle: "Budget Allocation",
        options: [
            { value: "1-none", label: "Budget not yet determined" },
            { value: "2-limited", label: "Limited budget, need cost-effective solution" },
            { value: "3-moderate", label: "Moderate budget with ROI expectations" },
            { value: "4-approved", label: "Well-funded digital transformation initiative" },
        ],
    },
    {
        id: 7,
        category: "Requirements",
        text: "How important is customization for your business?",
        shortTitle: "Customization Need",
        options: [
            { value: "1-standard", label: "Standard features are sufficient" },
            { value: "2-minor", label: "Minor customization needed" },
            { value: "3-significant", label: "Significant customization required" },
            { value: "4-highly", label: "Highly customized solution needed" },
        ],
    },
    {
        id: 8,
        category: "Team Capability",
        text: "What is your team's technical expertise?",
        shortTitle: "Team Tech Skills",
        options: [
            { value: "1-limited", label: "Limited technical knowledge" },
            { value: "2-basic", label: "Basic computer skills" },
            { value: "3-moderate", label: "Moderate technical proficiency" },
            { value: "4-advanced", label: "Advanced technical capabilities" },
        ],
    },
    {
        id: 9,
        category: "Mobility",
        text: "How critical is mobile access for your operations?",
        shortTitle: "Mobile Access",
        options: [
            { value: "1-no", label: "Not important" },
            { value: "2-nice", label: "Nice to have" },
            { value: "3-important", label: "Important for some functions" },
            { value: "4-critical", label: "Critical for daily operations" },
        ],
    },
    {
        id: 10,
        category: "Culture",
        text: "What is your change management readiness?",
        shortTitle: "Change Readiness",
        options: [
            { value: "1-resistant", label: "Team resistant to change" },
            { value: "2-mixed", label: "Mixed acceptance of change" },
            { value: "3-open", label: "Generally open to change" },
            { value: "4-adaptable", label: "Highly adaptable team" },
        ],
    },
];
