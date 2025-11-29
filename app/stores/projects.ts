export const useProjectsStore = defineStore("projects", {
    state: () => ({
        items: [
            {
                title: "Starbucks Mobile App (Rebuild)",
                desc: "Rebuilt the Starbucks app from native into Flutter hybrid architecture. Delivered features for Mobile Ordering, Payments, and Multi-Tier Membership. Also maintained Starbucks Card Web using Nuxt & Yii2.",
                link: ""
            },
            {
                title: "My InOut – Expense Manager & Budget Planner",
                desc: "ML-powered budgeting and expense tracking app built with Flutter, GraphQL, and NestJS. Handles automatic expense classification with AI integration.",
                link: ""
            },
            {
                title: "ESB Mobile Dashboard",
                desc: "Enterprise dashboard app built with Flutter. Includes analytics, real-time monitoring, and advanced reporting for internal ESB operations.",
                link: ""
            },
            {
                title: "Olin Voice – AI Integrated Mobile App",
                desc: "Integrated AI voice interaction into mobile application using Flutter. Collaborated closely with backend/ML teams.",
                link: ""
            },
            {
                title: "eRecycle – Waste Education & Trading App",
                desc: "Mobile application for educating users on waste categorization, including features to sell recyclable waste. Built using Flutter.",
                link: ""
            },
            {
                title: "ABC Cooking Studio – Attendance App",
                desc: "Attendance tracking system built using Flutter, featuring QR scanning and clean UI optimized for staff operations.",
                link: ""
            },
            {
                title: "DESK – Asset Monitoring System",
                desc: "Developed full asset management ecosystem using Blazor & Flutter, including asset monitoring, inspections, preventive maintenance, and field inspector mobile tools.",
                link: ""
            },
            {
                title: "PIK2 Visitor Permission System",
                desc: "Built .NET Core MVC web app for PIK2 visitor permissions integrated with WhatsApp API to send QR verification. Includes interactive map built with Blazor.",
                link: ""
            }
        ]
    })
});
