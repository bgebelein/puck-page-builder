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
        content: {
            label: "Content",
            labelIcon: <Icon icon="lucide:captions" />,
            type: "object",
            objectFields: {
                title: {
                    label: "Headline",
                    labelIcon: <Icon icon="lucide:heading" />,
                    type: "text",
                    placeholder: "Your Hero Title",
                    contentEditable: true,
                },
                subline: {
                    label: "Subline",
                    labelIcon: <Icon icon="lucide:type" />,
                    type: "textarea",
                    placeholder: "Your Hero Subline",
                    contentEditable: true,
                },
                imgUrl: {
                    label: "Image URL",
                    labelIcon: <Icon icon="lucide:image" />,
                    type: "text",
                    placeholder: "Paste image URL here",
                },
            },
        },
    },
    defaultProps: {
        bgColor: "bg-blue-50",
        content: {
            title: "Welcome to Our Site",
            subline: "Discover amazing content and features",
            imgUrl: "https://raw.githubusercontent.com/alan-crts/shadcn-iconpicker/refs/heads/main/public/preview.gif",
        },
    },
    render: ({ bgColor, content, imgUrl }) => {
        return (
            <div className={`pt-30 text-center overflow-hidden ${bgColor}`}>
                <div className="container">
                    <h1>{content.title}</h1>
                    {content.subline && <p className="text-2xl">{content.subline}</p>}
                    {content.imgUrl && <img className="mx-auto mt-20 rounded-t-xl shadow-2xl" src={content.imgUrl} alt={`${content.title} hero image`} />}
                </div>
            </div>
        )
    },
}