import { Icon } from "@iconify/react";

const spacerWidths = {
    0: "w-0",
    2: "w-2",
    4: "w-4",
    8: "w-8",
    20: "w-20",
    30: "w-30",
    40: "w-40",
}

const spacerHeights = {
    0: "h-0",
    2: "h-2",
    4: "h-4",
    8: "h-8",
    20: "h-20",
    30: "h-30",
    40: "h-40",
}

export const Spacer = {
    label: "Spacer",
    fields: {
        direction: {
            type: "radio",
            label: "Direction",
            labelIcon: <Icon icon="lucide:move" />,
            options: [
                { label: "Horizontal", value: "w" },
                { label: "Vertical", value: "h" },
            ],
        },
        size: {
            label: "Size",
            labelIcon: <Icon icon="lucide:ruler" />,
            type: "select",
            options: [
                { label: "None", value: "0" },
                { label: "XS", value: "2" },
                { label: "SM", value: "4" },
                { label: "MD", value: "8" },
                { label: "LG", value: "20" },
                { label: "XL", value: "30" },
                { label: "2XL", value: "40" },
            ],
        },
    },
    defaultProps: {
        direction: "h",
        size: "8",
    },
    render: ({ direction, size }) => {
        return (
            <div className={`${direction}-${size}`}></div>
        );
    },
}