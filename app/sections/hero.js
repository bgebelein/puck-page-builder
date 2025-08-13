import { Icon } from "@iconify/react";

export const Hero = {
    label: "Hero",
    fields: {
        bgColor: {
            label: "Background Color",
            labelIcon: <Icon icon="lucide:paint-bucket" />,
            type: "select",
            options: [
                { label: "light", value: "bg-light" },
                { label: "dark", value: "bg-dark" },
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
        imgUrl: {
            label: "Image URL",
            labelIcon: <Icon icon="lucide:image" />,
            type: "text",
        },
    },
    defaultProps: {
        bgColor: "bg-blue-50",
        title: "Welcome to Our Site",
        subline: "Discover amazing content and features",
    },
    render: ({ bgColor, title, subline, imgUrl }) => {
        return (
            <div className={`pt-60 text-center ${bgColor}`}>
                <div className="container">
                    <h1>{title}</h1>
                    {subline && <p className="text-2xl">{subline}</p>}
                    {imgUrl && <img className="mx-auto mt-20 rounded-t-xl shadow-2xl" src={imgUrl} alt={`${title} hero image`} />}
                </div>
            </div>
        )
    },
}