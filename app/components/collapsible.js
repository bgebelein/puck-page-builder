import { Icon } from "@iconify/react";

export const Collapsible = {
    label: "Collapsible",
    fields: {
        content: {
            type: "slot",
            allow: ["Bodytext", "PuckButton", "Stack", "Spacer"],
        },
        title: {
            label: "Title",
            labelIcon: <Icon icon="lucide:type" />,
            type: "text",
            placeholder: "Enter your text here",
        },
        bgColor: {
            label: "Background Color",
            labelIcon: <Icon icon="lucide:paint-bucket" />,
            type: "select",
            options: [
                { label: "White", value: "bg-white" },
                { label: "Light", value: "bg-light" },
                { label: "Dark", value: "bg-dark" },
                { label: "Muted", value: "bg-muted" },
                { label: "Theme", value: "bg-theme" },
            ],
        },
    },
    defaultProps: {
        title: "Collapsible Title",
        bgColor: "bg-light",
        content: [
            {
                type: "Bodytext",
                props: {
                    text: "This is the content of the collapsible section. You can add more details here.",
                    size: "text-lg",
                    alignment: "text-left",
                }
            }
        ]
    },
    render: ({ title, bgColor, content: Content }) => {
        return (
            <details className={`group p-8 rounded-2xl shadow-sm ${bgColor}`} open>
                <summary className="flex items-center justify-between cursor-pointer mb-4">
                    <span className="text-2xl font-semibold">{title}</span>
                    <Icon icon="lucide:chevron-down" className="transition-transform group-open:rotate-180" />
                </summary>
                <Content className="flex flex-col gap-4" />
            </details>
        );
    }
}