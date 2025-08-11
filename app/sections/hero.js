import { Icon } from "@iconify/react";

export const Hero = {
    label: "Hero",
    fields: {
        bgColor: {
            label: "Background Color",
            labelIcon: <Icon icon="lucide:paint-bucket" />,
            type: "select",
            options: [
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
            <div className={`pt-40 text-center ${bgColor}`}>
                <div className="container">
                    <h1>{title}</h1>
                    <p>{subline}</p>
                    <img className="mx-auto mt-20 rounded-t-xl shadow-2xl" src={imgUrl} alt="Hero Image" />
                </div>
            </div>
        )
    },
}