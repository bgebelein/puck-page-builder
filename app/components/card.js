import { Icon } from "@iconify/react";

export const Card = ({
    bgColor = "bg-white",
    type = "icon",
    imgUrl = "https://mockmind-api.uifaces.co/content/abstract/50.jpg",
    icon = "lucide:info",
    title = "Card Title",
    description = "This is a brief description of the card content.",
}) => {
    return (
        <div className={`p-8 rounded-2xl shadow-sm ${bgColor}`}>
            {type === 'image' && <img src={imgUrl} alt={`${title} image`} title={`${title} image`} loading="lazy" />}
            {type === 'icon' && (
                <div className="bg-blue-700 text-white p-4 rounded-full inline-block mb-6">
                    <Icon icon={icon} />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export const PuckCard = {
    label: "Card",
    resolveFields: (data) => {
        const fields = {
            title: {
                type: "text",
                label: "Title",
                labelIcon: <Icon icon="lucide:type" />,
                placeholder: "Card Title",
            },
            description: {
                type: "textarea",
                label: "Description",
                labelIcon: <Icon icon="lucide:type" />,
                placeholder: "Brief description of the card content.",
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
            type: {
                type: "radio",
                label: "Card Type",
                labelIcon: <Icon icon="lucide:square-equal" />,
                options: [
                    { label: "Text", value: "text" },
                    { label: "Image", value: "image" },
                    { label: "Icon", value: "icon" },
                ],
            },
        };

        if (data.props.type === "image") {
            return {
                ...fields,
                imgUrl: {
                    label: "Image URL",
                    labelIcon: <Icon icon="lucide:image" />,
                    type: "text",
                    placeholder: "Paste image URL here",
                },
            };
        } else if (data.props.type === "icon") {
            return {
                ...fields,
                icon: {
                    type: "select",
                    label: "Icon",
                    labelIcon: <Icon icon="lucide:circle" />,
                    options: [
                        { label: "None", value: "" },
                        { label: "Info", value: "lucide:info" },
                        { label: "Warning", value: "lucide:triangle-alert" },
                        { label: "Error", value: "lucide:octagon-alert" },
                        { label: "Success", value: "lucide:circle-check" },
                    ],
                },
            };
        } else {
            return {
                ...fields,
            };
        }
    },
    defaultProps: {
        bgColor: "bg-light",
        type: "icon",
        imgUrl: "https://mockmind-api.uifaces.co/content/abstract/50.jpg",
        icon: "lucide:info",
        title: "Card Title",
        description: "This is a brief description of the card content.",
    },
    render: ({ bgColor, type, imgUrl, icon, title, description }) => {
        return (
            <Card
                bgColor={bgColor}
                type={type}
                imgUrl={imgUrl}
                icon={icon}
                title={title}
                description={description}
            />
        )
    }
}