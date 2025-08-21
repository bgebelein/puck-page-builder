import { ComponentConfig } from "@measured/puck";
import { Icon } from "@iconify/react";

export const Stats: ComponentConfig = {
    label: "Stats",
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
                    contentEditable: true,
                },
                subline: {
                    label: "Subline",
                    labelIcon: <Icon icon="lucide:type" />,
                    type: "textarea",
                    contentEditable: true,
                },
            }
        },
    },
    defaultProps: {
        bgColor: "bg-transparent",
        anchorId: "stats",
        intro: {
            title: "Trusted by thousands of users worldwide",
            subline: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        },
        content: [
            {
                type: "PuckCard",
                props: {
                    type: "icon",
                    bgColor: "bg-white",
                    imgUrl: "https://mockmind-api.uifaces.co/content/abstract/50.jpg",
                    icon: "lucide:info",
                    title: "XX",
                    description: "Amazing statistic 1",
                },
            },
            {
                type: "PuckCard",
                props: {
                    type: "icon",
                    bgColor: "bg-white",
                    imgUrl: "https://mockmind-api.uifaces.co/content/abstract/49.jpg",
                    icon: "lucide:info",
                    title: "XX",
                    description: "Amazing statistic 2",
                },
            },
            {
                type: "PuckCard",
                props: {
                    type: "icon",
                    bgColor: "bg-white",
                    imgUrl: "https://mockmind-api.uifaces.co/content/abstract/47.jpg",
                    icon: "lucide:info",
                    title: "XX",
                    description: "Amazing statistic 3",
                },
            },
        ],
    },
    render: ({ bgColor, anchorId, intro, content: Content }) => {
        return (
            <section id={anchorId} className={`py-30 ${bgColor}`}>
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="max-w-4xl">
                        <h2>{intro.title}</h2>
                        {intro.subline && <p className="text-2xl mb-12">{intro.subline}</p>}
                    </div>
                    <Content className="grid grid-cols-12 *:[&:nth-child(4n-3)]:col-span-7 *:[&:nth-child(4n-2)]:col-span-5 *:[&:nth-child(4n-1)]:col-span-5 *:[&:nth-child(4n-1)]:last:col-span-12 *:[&:nth-child(4n)]:col-span-7 gap-4 md:gap-6" />
                </div>
            </section>
        )
    },
}