import { Icon } from "@iconify/react";

export const Team = {
    label: "Team",
    fields: {
        content: {
            type: "slot",
            allow: ["PuckCard"],
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
        anchorId: {
            label: "ID",
            labelIcon: <Icon icon="lucide:hash" />,
            type: "text",
        },
        intro: {
            label: "Introduction",
            labelIcon: <Icon icon="lucide:captions" />,
            type: "object",
            objectFields: {
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
            }
        },
    },
    defaultProps: {
        bgColor: "bg-transparent",
        anchorId: "team",
        intro: {
            title: "Team member introduction",
            subline: "Our team is made up of talented individuals who are passionate about what they do.",
        },
        content: [
            {
                type: "PuckCard",
                props: {
                    type: "image",
                    bgColor: "bg-white",
                    imgUrl: "https://mockmind-api.uifaces.co/content/abstract/50.jpg",
                    icon: "lucide:info",
                    title: "Card Title",
                    description: "This is a brief description of the card content.",
                },
            },
            {
                type: "PuckCard",
                props: {
                    type: "image",
                    bgColor: "bg-white",
                    imgUrl: "https://mockmind-api.uifaces.co/content/abstract/49.jpg",
                    icon: "lucide:info",
                    title: "Card Title",
                    description: "This is a brief description of the card content.",
                },
            },
            {
                type: "PuckCard",
                props: {
                    type: "image",
                    bgColor: "bg-white",
                    imgUrl: "https://mockmind-api.uifaces.co/content/abstract/47.jpg",
                    icon: "lucide:info",
                    title: "Card Title",
                    description: "This is a brief description of the card content.",
                },
            },
        ],
    },
    render: ({ bgColor, anchorId, intro, content: Content }) => {
        return (
            <section id={anchorId} className={`py-30 ${bgColor}`}>
                <div className="container">
                    <div className="max-w-4xl">
                        <h2>{intro.title}</h2>
                        {intro.subline && <p className="text-2xl">{intro.subline}</p>}
                    </div>
                    <Content className={`grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-4 md:gap-6 mt-12`} />
                </div>
            </section>
        )
    },
}