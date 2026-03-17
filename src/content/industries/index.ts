import type { Industry } from '@/types';

export const industries: Industry[] = [
  // -------------------------------------------------------------------------
  // 1. Manufacturing
  // -------------------------------------------------------------------------
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    description:
      'Streamline discrete and process manufacturing operations with ERPNext — from bill of materials and production planning through quality control and shop-floor execution. Gain real-time visibility into every stage of your production lifecycle.',
    icon: 'Factory',
    challenges: [
      'Complex multi-level BOMs and frequent engineering changes that legacy systems cannot track in real time',
      'Disconnected production planning and inventory management leading to stockouts, overstocking, and missed delivery dates',
      'Manual quality control processes with no traceability from raw material receipt to finished goods dispatch',
      'Limited visibility into production costs, machine utilization, and work-in-progress across multiple facilities',
    ],
    solutions: [
      {
        title: 'Integrated Production Planning',
        description:
          'ERPNext\'s manufacturing module links sales forecasts to production plans, material requirements, and purchase orders — ensuring you produce the right quantities at the right time with minimal waste.',
      },
      {
        title: 'Multi-Level BOM Management',
        description:
          'Manage complex product structures with unlimited BOM levels, variant configurations, and engineering change orders that propagate automatically across planning and costing modules.',
      },
      {
        title: 'Quality Management System',
        description:
          'Enforce inspection checkpoints at receiving, in-process, and final stages with configurable quality templates, automatic hold procedures, and full lot traceability.',
      },
      {
        title: 'Real-Time Shop Floor Tracking',
        description:
          'Track job card progress, machine utilization, and operator productivity in real time through browser-based workstations or barcode scanning — replacing paper travelers and manual logs.',
      },
    ],
    benefits: [
      'Reduce production lead times by 25-40% with integrated planning and scheduling',
      'Lower inventory carrying costs through demand-driven material requirements planning',
      'Achieve full batch and lot traceability for regulatory compliance and recall management',
      'Gain accurate product costing with real-time tracking of material, labor, and overhead',
      'Improve on-time delivery performance with live production dashboards and exception alerts',
    ],
    keyModules: ['Production', 'Quality', 'Inventory', 'Maintenance'],
    stats: [
      { value: "25-40%", label: "Lead Time Reduction" },
      { value: "15-20%", label: "Inventory Cost Savings" },
    ],
    timeline: [
      { step: "Phase 1", label: "Core Foundation", description: "Standardize Bill of Materials (BOM), item masters, and raw material inventory workflows." },
      { step: "Phase 2", label: "Production Control", description: "Enable Material Requirements Planning (MRP), workstations, and live job cards." },
      { step: "Phase 3", label: "Quality & Costing", description: "Activate automated QMS checklist checkpoints and real-time machine absorption costing." }
    ],
    metaTitle: 'ERPNext for Manufacturing | TECHINCGLOBAL',
    metaDescription:
      'ERPNext manufacturing solutions for production planning, BOM management, quality control, and shop-floor tracking. Reduce lead times and improve delivery performance.',
  },

  // -------------------------------------------------------------------------
  // 2. Distribution & Logistics
  // -------------------------------------------------------------------------
  {
    slug: 'distribution-logistics',
    title: 'Distribution & Logistics',
    description:
      'Optimize your supply chain from warehouse to last-mile delivery. ERPNext unifies inventory management, order fulfillment, fleet coordination, and logistics tracking into a single platform that scales with your distribution network.',
    icon: 'Truck',
    challenges: [
      'Inventory inaccuracies across multiple warehouses leading to overselling, stock mismatches, and costly emergency shipments',
      'Manual order fulfillment processes that cannot keep pace with growing order volumes and customer delivery expectations',
      'No real-time visibility into fleet operations, delivery status, or third-party logistics partner performance',
      'Inability to manage complex pricing structures including volume discounts, territory-based pricing, and promotional campaigns',
    ],
    solutions: [
      {
        title: 'Multi-Warehouse Inventory Control',
        description:
          'Manage stock across unlimited warehouses with real-time quantity tracking, batch and serial number management, automated reorder points, and inter-warehouse transfer workflows.',
      },
      {
        title: 'Automated Order Fulfillment',
        description:
          'Streamline pick-pack-ship workflows with wave planning, barcode-driven picking, automatic carrier selection, and shipping label generation that reduces order processing time by up to 60%.',
      },
      {
        title: 'Fleet & Delivery Management',
        description:
          'Track vehicle assignments, delivery routes, and proof of delivery in real time. Integrate with 3PL partners through API connectors for seamless logistics orchestration.',
      },
    ],
    benefits: [
      'Achieve 99%+ inventory accuracy with barcode scanning and cycle count automation',
      'Reduce order-to-ship cycle time by 40-60% through automated fulfillment workflows',
      'Optimize delivery routes and fleet utilization to lower transportation costs',
      'Improve customer satisfaction with real-time delivery tracking and automated notifications',
      'Scale to new warehouses and distribution centers without adding administrative overhead',
    ],
    keyModules: ['Multi-Warehouse', 'Automated Fulfillment', 'Fleet Management', '3PL Connectors'],
    stats: [
      { value: "99%+", label: "Inventory Accuracy" },
      { value: "40-60%", label: "Faster Cycle Time" },
    ],
    timeline: [
      { step: "Phase 1", label: "Supply Chain Base", description: "Unify multi-warehouse tracking, batch control, and barcode-driven receiving workflows." },
      { step: "Phase 2", label: "Fulfillment Sync", description: "Automate wave picking schedules, container assignment, and proof-of-delivery syncs." },
      { step: "Phase 3", label: "Insights & Fleet", description: "Deploy 3PL connectors and strategic predictive restock alert automation." }
    ],
    metaTitle: 'ERPNext for Distribution & Logistics | TECHINCGLOBAL',
    metaDescription:
      'Distribution and logistics ERP solutions with multi-warehouse inventory, automated fulfillment, fleet management, and 3PL integration. Optimize your supply chain with ERPNext.',
  },

  // -------------------------------------------------------------------------
  // 3. Retail & E-Commerce
  // -------------------------------------------------------------------------
  {
    slug: 'retail-ecommerce',
    title: 'Retail & E-Commerce',
    description:
      'Unify your retail operations across physical stores, online channels, and mobile commerce. ERPNext delivers integrated POS, inventory, customer management, and promotions in a platform that adapts to the fast pace of modern retail.',
    icon: 'ShoppingCart',
    challenges: [
      'Fragmented systems for POS, e-commerce, and accounting that create data silos and prevent a unified view of the customer',
      'Difficulty managing inventory across multiple stores and online channels, leading to overselling and lost sales',
      'Inability to run effective loyalty programs and targeted promotions without a centralized customer database',
      'Manual reconciliation of sales, payments, and inventory between online and offline channels consuming hours of staff time daily',
    ],
    solutions: [
      {
        title: 'Unified POS & E-Commerce',
        description:
          'ERPNext POS syncs with your online store in real time — prices, promotions, inventory levels, and customer data are consistent across every channel, eliminating reconciliation headaches.',
      },
      {
        title: 'Omnichannel Inventory Management',
        description:
          'Maintain a single inventory pool with allocation rules for each channel. Automatic stock reservation, transfer recommendations, and reorder triggers prevent stockouts and overstocking.',
      },
      {
        title: 'Customer Loyalty & Promotions Engine',
        description:
          'Design point-based loyalty programs, tiered discounts, buy-one-get-one offers, and seasonal promotions — all managed centrally and applied automatically at every touchpoint.',
      },
    ],
    benefits: [
      'Eliminate channel-specific data silos with a single customer and inventory database',
      'Increase average transaction value with targeted promotions and loyalty programs',
      'Reduce stockouts by 30-50% with real-time omnichannel inventory visibility',
      'Accelerate month-end closing with automated sales and payment reconciliation',
      'Scale from a single store to a multi-location retail chain on one platform',
    ],
    keyModules: ['Omnichannel POS', 'E-Commerce Sync', 'Loyalty Engine', 'Auto-Reconciliation'],
    stats: [
      { value: "30-50%", label: "Stockout Reduction" },
      { value: "15-20%", label: "Loyalty Revenue Boost" },
    ],
    timeline: [
      { step: "Phase 1", label: "Unified Catalog", description: "Consolidate pricing rules, taxes, and omnichannel master inventory lists." },
      { step: "Phase 2", label: "POS & Sales Connect", description: "Deploy localized online/offline POS checkouts with auto-reconciliations." },
      { step: "Phase 3", label: "Growth Engines", description: "Enable point-based loyalty tiers and targeted CRM automated promotions." }
    ],
    metaTitle: 'ERPNext for Retail & E-Commerce | TECHINCGLOBAL',
    metaDescription:
      'Omnichannel retail ERP with integrated POS, e-commerce sync, loyalty programs, and multi-store inventory management. Unify your retail operations with ERPNext.',
  },

  // -------------------------------------------------------------------------
  // 4. Professional Services
  // -------------------------------------------------------------------------
  {
    slug: 'professional-services',
    title: 'Professional Services',
    description:
      'Manage projects, track billable time, optimize resource utilization, and automate invoicing from a single platform. ERPNext gives professional services firms the visibility to deliver projects profitably and on schedule.',
    icon: 'Briefcase',
    challenges: [
      'Lack of visibility into project profitability until it is too late, with costs buried in spreadsheets and disconnected systems',
      'Inefficient resource allocation leading to underutilized consultants or overcommitted teams that miss deadlines',
      'Manual timekeeping and invoicing processes that delay revenue recognition and create billing disputes',
      'Difficulty forecasting pipeline, capacity, and revenue across multiple concurrent engagements',
    ],
    solutions: [
      {
        title: 'Project Accounting & Profitability Tracking',
        description:
          'Track every cost — labor, expenses, subcontractors — against project budgets in real time. Profitability dashboards flag at-risk projects before margins erode.',
      },
      {
        title: 'Resource Management & Capacity Planning',
        description:
          'Visualize team availability, skill sets, and utilization rates to assign the right people to the right projects. Forecast capacity gaps weeks in advance.',
      },
      {
        title: 'Time Tracking & Automated Billing',
        description:
          'Capture billable hours through timesheets linked directly to projects and billing milestones. Generate invoices automatically based on time-and-material or fixed-fee arrangements.',
      },
    ],
    benefits: [
      'Improve project margins by 15-25% with real-time cost tracking and early warning alerts',
      'Increase billable utilization by matching skills to project needs with capacity planning tools',
      'Accelerate invoicing from weeks to days with automated timesheet-to-invoice workflows',
      'Make data-driven staffing decisions with utilization dashboards and demand forecasts',
      'Deliver a better client experience with project portals, milestone tracking, and transparent billing',
    ],
    keyModules: ['Project Accounting', 'Resource Management', 'Time Tracking', 'Automated Billing'],
    stats: [
      { value: "15-25%", label: "Margin Improvement" },
      { value: "60%", label: "Faster Invoicing Cycles" },
    ],
    timeline: [
      { step: "Phase 1", label: "Workspace Portals", description: "Design structure for timesheets, project budgets, and accurate allocation grids." },
      { step: "Phase 2", label: "Milestones Tracking", description: "Unify invoicing schedules to automatically sync deliverables to accounting modules." },
      { step: "Phase 3", label: "Analytics Engine", description: "Dashboard layouts for absolute early warnings on erosion margins." }
    ],
    metaTitle: 'ERPNext for Professional Services | TECHINCGLOBAL',
    metaDescription:
      'Professional services ERP with project accounting, resource management, time tracking, and automated billing. Improve project margins and utilization with ERPNext.',
  },

  // -------------------------------------------------------------------------
  // 5. Construction & Real Estate
  // -------------------------------------------------------------------------
  {
    slug: 'construction-real-estate',
    title: 'Construction & Real Estate',
    description:
      'Control project costs, coordinate subcontractors, track assets, and manage property portfolios from a single platform. ERPNext brings financial discipline and operational visibility to the complexity of construction and real estate operations.',
    icon: 'Building2',
    challenges: [
      'Project cost overruns caused by fragmented tracking of materials, labor, subcontractor claims, and change orders',
      'Poor coordination between site teams, procurement, and finance resulting in delays, duplicate orders, and payment disputes',
      'Difficulty managing large fleets of equipment, tools, and fixed assets across multiple project sites',
      'Complex revenue recognition requirements for long-term contracts with milestone-based billing and retention',
    ],
    solutions: [
      {
        title: 'Project Costing & Budget Control',
        description:
          'Track actual costs against budgets at the work-breakdown-structure level. Automated alerts flag cost overruns early, and change-order workflows ensure every scope change is priced and approved.',
      },
      {
        title: 'Subcontractor & Procurement Management',
        description:
          'Manage subcontractor contracts, work certifications, retention amounts, and progress payments within ERPNext. Procurement workflows ensure materials arrive on site when needed without overstocking.',
      },
      {
        title: 'Asset & Equipment Tracking',
        description:
          'Track the location, utilization, maintenance schedule, and depreciation of every asset across project sites. Transfer assets between sites with full audit trail and accounting impact.',
      },
    ],
    benefits: [
      'Reduce cost overruns by 20-35% with real-time project-level budget tracking and alerts',
      'Streamline subcontractor payment cycles with digital work certifications and approval workflows',
      'Extend equipment life and reduce downtime with preventive maintenance scheduling',
      'Improve cash flow management with milestone billing automation and retention tracking',
      'Gain a consolidated view of profitability across all active projects and properties',
    ],
    keyModules: ['Cost Tracking', 'Subcontracting Management', 'Asset Tracking', 'Milestone Billing'],
    stats: [
      { value: "20-35%", label: "Cost Overrun Reduction" },
      { value: "35%", label: "Faster Period Close" },
    ],
    timeline: [
      { step: "Phase 1", label: "Budget discipline", description: "Establish standard cost-center budgets and sub-contractor certification rules." },
      { step: "Phase 2", label: "Asset Deployment", description: "Track location, downtime logs, and schedules of large fleets across sites." },
      { step: "Phase 3", label: "Retention Sync", description: "Deploy milestone billing with auto-retention triggers and claim schedules." }
    ],
    metaTitle: 'ERPNext for Construction & Real Estate | TECHINCGLOBAL',
    metaDescription:
      'Construction and real estate ERP solutions for project costing, subcontractor management, asset tracking, and milestone billing. Control costs and deliver on schedule.',
  },

  // -------------------------------------------------------------------------
  // 6. Healthcare
  // -------------------------------------------------------------------------
  {
    slug: 'healthcare',
    title: 'Healthcare',
    description:
      'Manage patient records, pharmacy inventory, clinical workflows, billing, and regulatory compliance from an integrated healthcare platform. ERPNext Healthcare helps providers focus on patient care while the system handles administration.',
    icon: 'Heart',
    challenges: [
      'Paper-based or fragmented patient records that slow clinical decision-making and create compliance risks',
      'Pharmacy and medical supply inventory mismanagement leading to expired stock, shortages, and revenue leakage',
      'Complex billing requirements involving insurance claims, government schemes, and patient co-payments',
      'Meeting regulatory and accreditation requirements for data privacy, clinical documentation, and audit trails',
    ],
    solutions: [
      {
        title: 'Electronic Health Records',
        description:
          'Maintain comprehensive, searchable patient records including demographics, clinical history, lab results, prescriptions, and appointment history — accessible to authorized staff across departments.',
      },
      {
        title: 'Pharmacy & Supply Chain Management',
        description:
          'Track medical supplies and pharmaceuticals with batch numbers, expiry dates, and automated reorder points. FIFO dispensing rules and expiry alerts minimize waste and ensure patient safety.',
      },
      {
        title: 'Integrated Billing & Insurance Processing',
        description:
          'Generate itemized bills from clinical encounters automatically. Process insurance claims, manage co-payments, and track outstanding receivables with a billing module designed for healthcare complexity.',
      },
    ],
    benefits: [
      'Improve clinical decision-making with instant access to complete patient histories',
      'Reduce pharmaceutical waste by 20-40% with expiry tracking and demand-based ordering',
      'Accelerate revenue collection with automated billing and insurance claim processing',
      'Achieve compliance readiness with built-in audit trails, access controls, and data encryption',
      'Enhance patient experience with appointment scheduling, reminders, and self-service portals',
    ],
    keyModules: ['Electronic Records', 'Pharmacy Management', 'Clinical Billing', 'Audit Trails'],
    stats: [
      { value: "20-40%", label: "Pharmacy Waste Savings" },
      { value: "30%", label: "Administrative Load Saved" },
    ],
    timeline: [
      { step: "Phase 1", label: "EHR Backbone", description: "Index unified patient profile catalogs, appointment workflows, and prescriptions." },
      { step: "Phase 2", label: "Cycle Management", description: "Deploy FIFO pharmaceutical allocation batches with triggers for expiring loads." },
      { step: "Phase 3", label: "Disbursement Sync", description: "Automate itemized encounters synced to insurance claims approvals." }
    ],
    metaTitle: 'ERPNext for Healthcare | TECHINCGLOBAL',
    metaDescription:
      'Healthcare ERP solutions for patient records, pharmacy management, clinical billing, and compliance. Improve patient care and operational efficiency with ERPNext.',
  },

  // -------------------------------------------------------------------------
  // 7. Education
  // -------------------------------------------------------------------------
  {
    slug: 'education',
    title: 'Education',
    description:
      'Unify student management, admissions, fee collection, academic scheduling, HR, and library operations in a single platform. ERPNext Education empowers institutions to deliver a better experience for students, parents, and staff.',
    icon: 'BookOpen',
    challenges: [
      'Disconnected systems for admissions, student records, fee collection, and academic management creating data silos and administrative burden',
      'Manual fee collection and follow-up processes that are error-prone, slow, and difficult to reconcile',
      'Limited visibility into institutional performance metrics like enrollment trends, fee recovery rates, and staff utilization',
      'Growing demand for online learning, digital communication, and parent self-service that legacy systems cannot support',
    ],
    solutions: [
      {
        title: 'Student Lifecycle Management',
        description:
          'Manage the complete student journey from inquiry and admission through enrollment, academics, examinations, and alumni relations — with a unified student profile accessible across departments.',
      },
      {
        title: 'Fee Collection & Financial Management',
        description:
          'Automate fee structure configuration, installment plans, scholarship deductions, late fee calculations, and payment receipt generation. Integrate with banks and payment gateways for online fee collection.',
      },
      {
        title: 'Academic Planning & Assessment',
        description:
          'Schedule classes, manage timetables, publish assessments, and track academic progress with grading rubrics and report card generation — all within ERPNext.',
      },
    ],
    benefits: [
      'Reduce administrative workload by 40-50% with automated student records and fee management',
      'Improve fee recovery rates with automated reminders, online payment options, and real-time tracking',
      'Enhance parent and student engagement with self-service portals for grades, attendance, and payments',
      'Make data-driven decisions with dashboards covering enrollment, finances, and academic performance',
      'Scale from a single institution to a multi-campus group on a unified platform',
    ],
    keyModules: ['Student Lifecycle', 'Fee Management', 'Academic Planning', 'Parent Portals'],
    stats: [
      { value: "40-50%", label: "Paperwork Load Reduction" },
      { value: "25%", label: "Higher Fee Recovery Rate" },
    ],
    timeline: [
      { step: "Phase 1", label: "Records Control", description: "Enroll student lifecycle profiles, fee structures, and installment frameworks." },
      { step: "Phase 2", label: "Academics Desk", description: "Generate automated report cards, timetables maps, and assessment rubrics." },
      { step: "Phase 3", label: "Folk Gateways", description: "Enable continuous collection online processing with threshold metrics dashboards." }
    ],
    metaTitle: 'ERPNext for Education | TECHINCGLOBAL',
    metaDescription:
      'Education ERP for student management, fee collection, academic planning, and institutional administration. Streamline operations and improve student outcomes with ERPNext.',
  },

  // -------------------------------------------------------------------------
  // 8. Trading & Import Export
  // -------------------------------------------------------------------------
  {
    slug: 'trading-import-export',
    title: 'Trading & Import/Export',
    description:
      'Navigate the complexities of international trade with ERPNext — multi-currency transactions, customs documentation, landed cost calculations, and letter of credit management. Purpose-built for Sri Lankan traders operating in global markets.',
    icon: 'Globe',
    challenges: [
      'Managing multi-currency transactions with fluctuating exchange rates, requiring constant manual adjustments and reconciliation',
      'Tracking landed costs accurately across duty, freight, insurance, and clearing charges to determine true product profitability',
      'Complex documentation requirements for customs declarations, letters of credit, and certificates of origin',
      'Difficulty managing multiple supplier relationships across countries with varying lead times, payment terms, and compliance requirements',
    ],
    solutions: [
      {
        title: 'Multi-Currency & Exchange Rate Management',
        description:
          'Handle transactions in any currency with automatic exchange rate updates, realized and unrealized gain/loss tracking, and multi-currency bank reconciliation — essential for Sri Lankan importers and exporters.',
      },
      {
        title: 'Landed Cost Calculation',
        description:
          'Automatically distribute customs duty, freight charges, insurance, port handling, and clearing agent fees across imported items to calculate accurate landed costs and true product margins.',
      },
      {
        title: 'Trade Finance & LC Management',
        description:
          'Track letters of credit, bank guarantees, and trade finance instruments with document expiry alerts, utilization tracking, and integration with your banking relationships.',
      },
    ],
    benefits: [
      'Eliminate manual exchange rate calculations with automatic, auditable currency conversions',
      'Know your true product margins with accurate landed cost allocation across all cost components',
      'Reduce customs clearance delays with pre-configured document templates and compliance checks',
      'Improve supplier negotiation with complete visibility into historical pricing, lead times, and quality metrics',
      'Accelerate month-end closing with automated foreign currency revaluation and gain/loss posting',
    ],
    keyModules: ['Multi-currency', 'Landed Cost Tracking', 'LC Management', 'Compliance Templates'],
    stats: [
      { value: "100%", label: "FX Accounting Accuracy" },
      { value: "3-5 Days", label: "Faster Freight Clearing" },
    ],
    timeline: [
      { step: "Phase 1", label: "Trade Control", description: "Set standard multicurrency ledger revaluation controls and item pricing grids." },
      { step: "Phase 2", label: "Landed Cost Sync", description: "Automate duty/freight distribution absorption triggers per item receipts." },
      { step: "Phase 3", label: "Finance Portals", description: "Assign automated threshold alerts for LC documentation and guarantees." }
    ],
    metaTitle: 'ERPNext for Trading & Import/Export | TECHINCGLOBAL',
    metaDescription:
      'Trading and import/export ERP with multi-currency management, landed cost calculation, LC tracking, and customs documentation. Built for Sri Lankan businesses trading globally.',
  },
];

export default industries;
