import { Icon } from "@iconify/react";

const btnStyles = {
    base: "inline-flex gap-3 items-center px-4 py-3 rounded-xl text-xl font-medium border-2 transition-colors",
    disabled: "disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed",
    themePrimary: "bg-theme text-white border-theme hover:bg-theme-hover hover:border-theme-hover active:bg-theme-active active:border-theme-active",
    themeSecondary: "text-theme hover:bg-theme/10 active:bg-theme/20",
    whitePrimary: "bg-white text-theme border-white hover:bg-white/90 hover:border-white/90 active:bg-white/80 active:border-white/80",
    whiteSecondary: "text-white hover:bg-white/10 active:bg-white/20",
    ghost: "text-theme border-transparent hover:bg-theme/10 active:bg-theme/20",
};

export const Button = ({
    label = "Button",
    url = "#",
    leadingIcon = "",
    trailingIcon = "",
    style = "themePrimary",
}) => {
    return (
        <a className={`${btnStyles.base} ${btnStyles.disabled} ${btnStyles[style]}`} href={url}>
            {leadingIcon && <Icon icon={leadingIcon} />}
            {label}
            {trailingIcon && <Icon icon={trailingIcon} />}
        </a>
    )
}

export const PuckButton = {
    label: "Button",
    fields: {
        label: {
            type: "text",
            label: "Label",
            labelIcon: <Icon icon="lucide:type" />,
            placeholder: "Button Label",
        },
        url: {
            label: "URL",
            labelIcon: <Icon icon="lucide:link" />,
            type: "text"
        },
        style: {
            label: "Style",
            labelIcon: <Icon icon="lucide:chevron-down" />,
            type: "select",
            options: [
                { label: "Theme Primary", value: "themePrimary" },
                { label: "Theme Secondary", value: "themeSecondary" },
                { label: "White Primary", value: "whitePrimary" },
                { label: "White Secondary", value: "whiteSecondary" },
                { label: "Ghost", value: "ghost" },
            ],
        },
        leadingIcon: {
            type: "select",
            label: "Leading Icon",
            labelIcon: <Icon icon="lucide:circle" />,
            options: [
                { label: "None", value: "" },
                { label: "arrow-left", value: "tabler:arrow-narrow-left" },
                { label: "arrow-right", value: "tabler:arrow-narrow-right" },
            ],
        },
        trailingIcon: {
            type: "select",
            label: "Trailing Icon",
            labelIcon: <Icon icon="lucide:circle" />,
            options: [
                { label: "None", value: "" },
                { label: "arrow-left", value: "tabler:arrow-narrow-left" },
                { label: "arrow-right", value: "tabler:arrow-narrow-right" },
            ],
        },
    },
    defaultProps: {
        label: "Button",
        url: "#",
        style: "themePrimary",
    },
    render: ({ url, style, label, trailingIcon, leadingIcon }) => {
        return (
            <Button url={url} style={style} label={label} trailingIcon={trailingIcon} leadingIcon={leadingIcon} />
        );
    },
};