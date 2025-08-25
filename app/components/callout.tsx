import { ComponentConfig } from "@measured/puck";
import { Icon } from "@iconify/react";

const calloutStyles = {
    base: "max-w-2xl mx-auto border-1 rounded-2xl p-4",
    info: "bg-theme/5 border-theme text-theme",
    warning: "bg-amber-50 border-amber-500 text-amber-800",
    error: "bg-rose-50 border-rose-500 text-rose-800",
    success: "bg-emerald-50 border-emerald-500 text-emerald-800",
};

const calloutIcons = {
    info: {
        icon: "lucide:info",
        color: "bg-theme",
    },
    warning: {
        icon: "lucide:alert-triangle",
        color: "bg-amber-500",
    },
    error: {
        icon: "lucide:x-circle",
        color: "bg-rose-500",
    },
    success: {
        icon: "lucide:check-circle",
        color: "bg-emerald-500",
    },
};

export const Callout: ComponentConfig = {
    label: "Callout",
    fields: {
        variant: {
            label: "Variant",
            type: "select",
            labelIcon: <Icon icon="lucide:list-ordered" />,
            options: [
                { label: "Info", value: "info" },
                { label: "Warning", value: "warning" },
                { label: "Error", value: "error" },
                { label: "Success", value: "success" },
            ],
        },
        text: {
            label: "Text",
            labelIcon: <Icon icon="lucide:type" />,
            type: "textarea",
            placeholder: "Your Callout Text",
            contentEditable: true,
        },
    },
    defaultProps: {
        variant: "info",
        text: "This is a callout message to draw attention to important information or actions.",
    },
    render: ({ variant, text }) => {
        return (
            <div className={`flex flex-row items-start gap-5 ${calloutStyles.base} ${calloutStyles[variant]}`} role="alert">
                <div className={`text-white p-4 rounded-xl inline-block ${calloutIcons[variant].color}`}>
                    <Icon icon={calloutIcons[variant].icon} />
                </div>
                <p className="">{text}</p>
            </div>
        )
    }
}