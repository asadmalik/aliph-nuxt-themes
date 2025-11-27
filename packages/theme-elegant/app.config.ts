export default defineAppConfig({
    theme: {
        blog: {
            category: {
                visible: true,
                colorClass: "text-mikado_yellow-500",
                hoverClass: "text-oxford_blue-700",
                linkArchivePage: true,
            },
            tags: {
                visible: true,
                colorClass: "text-mikado_yellow-500",
                hoverClass: "text-oxford_blue-700",
                linkArchivePage: true,
            },
            author: {
                visible: true,
                colorClass: "text-mikado_yellow-500",
                hoverClass: "text-oxford_blue-700",
                linkArchivePage: false,
            },
            publishDate: {
                visible: true,
                colorClass: "text-mikado_yellow-500",
                hoverClass: "text-oxford_blue-700",
                linkArchivePage: true,
            },
        },
    },

    ui: {
        ctaButton: {
            backgroundColor: "bg-oxford_blue-600",
            textColor: "text-white",
            hoverBackgroundColor: "bg-oxford_blue-800",
        },
        navbar: {
            backgroundColor: "bg-oxford_blue-900",
            textColor: "text-white",
        },
        footer: {
            backgroundColor: "bg-oxford_blue-900",
            textColor: "text-white",
        },
    },
},
);
