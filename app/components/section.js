import { Icon } from "@iconify/react";

export const Section = {
    label: "Section",
    fields: {
        content: {
            type: "slot",
        },
        bgColor: {
            label: "Background Color",
            labelIcon: <Icon icon="lucide:paint-bucket" />,
            type: "select",
            options: [
                { label: "None", value: "bg-transparent" },
                { label: "White", value: "bg-white" },
                { label: "Black", value: "bg-black" },
                { label: "Muted", value: "bg-muted" },
                { label: "Theme", value: "bg-theme" },
            ],
        },
    },
    defaultProps: {
        bgColor: "bg-transparent",
    },
    render: ({ bgColor, content: Content }) => {
        return (
            <section className={`py-30 ${bgColor}`}>
                <Content className="container" />
            </section>
        );
    },
}