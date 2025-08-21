import { Icon } from "@iconify/react";
import { ComponentConfig } from "@measured/puck";

const spacings = {
    1: "size-4",
    2: "size-6",
    3: "size-10",
    4: "size-20",
    5: "size-40",
}

export const Spacer: ComponentConfig = {
    label: "Spacer",
    fields: {
        size: {
            type: "slider",
            label: "Size",
            icon: <Icon icon="lucide:sliders-horizontal" />,
            min: 1,
            max: 5,
            step: 1,
        },
    },
    defaultProps: {
        size: 3,
    },
    render: ({ direction, size }) => {
        return (
            <div className={spacings[size]}></div>
        );
    },
}