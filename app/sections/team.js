import { Icon } from "@iconify/react";

export const Team = {
    label: "Team",
    fields: {
        content: {
          type: "slot",
          allow: ["Card"],
        },
        bgColor: {
            label: "Background Color",
            labelIcon: <Icon icon="lucide:paint-bucket" />,
            type: "select",
            options: [
                { label: "None", value: "bg-transparent" },
                { label: "Light", value: "bg-light" },
                { label: "Dark", value: "bg-dark" },
                { label: "Muted", value: "bg-muted" },
                { label: "Theme", value: "bg-theme" },
            ],
        },
        title: {
            label: "Headline",
            labelIcon: <Icon icon="lucide:heading" />,
            type: "text",
        },
        subline: {
            label: "Subline",
            labelIcon: <Icon icon="lucide:type" />,
            type: "textarea",
        },
    },
    defaultProps: {
        bgColor: "bg-transparent",
        title: "Team member introduction",
        subline: "Our team is made up of talented individuals who are passionate about what they do.",
        content: [
            {
                type: "Card",
                props: {
                    type: "image",
                    bgColor: "bg-white",
                    imgUrl: "https://mockmind-api.uifaces.co/content/human/123.jpg",
                    icon: "lucide:info",
                    title: "Card Title",
                    description: "This is a brief description of the card content.",
                },
            },
            {
                type: "Card",
                props: {
                    type: "image",
                    bgColor: "bg-white",
                    imgUrl: "https://mockmind-api.uifaces.co/content/human/123.jpg",
                    icon: "lucide:info",
                    title: "Card Title",
                    description: "This is a brief description of the card content.",
                },
            },
            {
                type: "Card",
                props: {
                    type: "image",
                    bgColor: "bg-white",
                    imgUrl: "https://mockmind-api.uifaces.co/content/human/123.jpg",
                    icon: "lucide:info",
                    title: "Card Title",
                    description: "This is a brief description of the card content.",
                },
            },
        ],
    },
    render: ({ bgColor, title, subline, columns, content: Content }) => {
        return (
            <section className={`py-30 ${bgColor}`}>
                <div className="container">
                    <h2>{title}</h2>
                    {subline && <p className="text-2xl">{subline}</p>}
                    <Content className={`grid lg:grid-cols-4 grid-cols-2 gap-6 mt-12`} />
                </div>
            </section>
        )
    },
}