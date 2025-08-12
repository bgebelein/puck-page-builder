import { Icon } from "@iconify/react";

export const Footer = {
    label: "Footer",
    fields: {
        bgColor: {
            label: "Background Color",
            labelIcon: <Icon icon="lucide:paint-bucket" />,
            type: "select",
            options: [
                { label: "White", value: "bg-white" },
                { label: "Black", value: "bg-black" },
                { label: "Muted", value: "bg-muted" },
                { label: "Theme", value: "bg-theme" },
            ],
        },
        text: {
            label: "Text",
            labelIcon: <Icon icon="lucide:type" />,
            type: "text",
            placeholder: "Your footer text here",
        },
    },
    defaultProps: {
        bgColor: "bg-blac",
        text: "© YYYY Your Company. All rights reserved.",
    },
    render: ({ bgColor, text }) => {
        return (
            <footer className={`py-4 flex items-center justify-around ${bgColor}`}>
                <p className="text-slate-50">{text}</p>
            </footer>
        )
    },
}