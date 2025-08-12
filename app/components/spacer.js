import { Icon } from "@iconify/react";
import { FieldLabel } from "@measured/puck";

const spacings = {
    1: "size-4",
    2: "size-8",
    3: "size-20",
    4: "size-30",
    5: "size-40",
}

export const Spacer = {
    label: "Spacer",
    fields: {
        // size: {
        //     label: "Size",
        //     labelIcon: <Icon icon="lucide:ruler" />,
        //     type: "select",
        //     options: [
        //         { label: "None", value: "0" },
        //         { label: "XS", value: "2" },
        //         { label: "SM", value: "4" },
        //         { label: "MD", value: "8" },
        //         { label: "LG", value: "20" },
        //         { label: "XL", value: "30" },
        //         { label: "2XL", value: "40" },
        //     ],
        // },
        size: {
            type: "custom",
            label: "Size",
            min: 1,
            max: 5,
            step: 1,
            render: ({ field, name, onChange, value }) => (
                <FieldLabel label={field.label}>
                    <input
                        type="range"
                        min={field.min}
                        max={field.max}
                        step={field.step}
                        defaultValue={value}
                        name={name}
                        onChange={(e) => onChange(e.currentTarget.value)}
                        style={{ border: "1px solid black", padding: 4 }}
                    />
                </FieldLabel>
            ),
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