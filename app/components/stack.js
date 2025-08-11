import { Icon } from "@iconify/react";

export const Stack = {
    label: "Stack",
    fields: {
        content: {
            type: "slot",
        },
        direction: {
            type: "radio",
            label: "Direction",
            labelIcon: <Icon icon="lucide:move" />,
            options: [
                { label: "Horizontal", value: "flex-row" },
                { label: "Vertical", value: "flex-col" },
            ],
        },
        horizontalAlignment: {
            type: "radio",
            label: "Horizontal Alignment",
            labelIcon: <Icon icon="lucide:align-center-horizontal" />,
            options: [
                { label: "Start", value: "justsify-start" },
                { label: "Center", value: "justify-center" },
                { label: "End", value: "justify-end" },
            ],
        },
        verticalAlignment: {
            type: "radio",
            label: "Vertical Alignment",
            labelIcon: <Icon icon="lucide:align-center-vertical" />,
            options: [
                { label: "Start", value: "items-start" },
                { label: "Center", value: "items-center" },
                { label: "End", value: "items-end" },
            ],
        },
        gap: {
            label: "Gap Size",
            labelIcon: <Icon icon="lucide:align-horizontal-space-around" />,
            type: "select",
            options: [
                { label: "None", value: "gap-0" },
                { label: "XS", value: "gap-1" },
                { label: "SM", value: "gap-2" },
                { label: "MD", value: "gap-4" },
                { label: "LG", value: "gap-6" },
                { label: "XL", value: "gap-10" },
                { label: "2XL", value: "gap-20" },
            ],
        },
    },
    defaultProps: {
        direction: "flex-row",
        verticalAlignment: "items-center",
        horizontalAlignment: "justify-center",
        gap: "gap-4",
    },
    render: ({ direction, horizontalAlignment, verticalAlignment, gap, content: Content }) => {
        return (
            <Content className={`flex items-center ${direction} ${horizontalAlignment} ${verticalAlignment} ${gap}`} />
        );
    },
}