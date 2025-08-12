import { Icon } from "@iconify/react";
import { type } from "os";

const gridCols = {
    1: "xl:grid-cols-1",
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
}

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
                { label: "White", value: "bg-white" },
                { label: "Black", value: "bg-black text-white" },
                { label: "Muted", value: "bg-blue-50" },
                { label: "Theme", value: "bg-blue-700 text-white" },
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
        columns: {
            label: "Columns",
            labelIcon: <Icon icon="lucide:columns-4" />,
            type: "number",
            placeholder: "Number of columns",
            min: 1,
            max: 4,
        },
    },
    defaultProps: {
        bgColor: "bg-transparent",
        title: "Team member introduction",
        subline: "Our team is made up of talented individuals who are passionate about what they do.",
        columns: 3,
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
                    <p>{subline}</p>
                    <Content className={`grid ${gridCols[columns]} md:grid-cols-2 grid-cols-1 gap-8 mt-12`} />
                </div>
            </section>
        )
    },
}