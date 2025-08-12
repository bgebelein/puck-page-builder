import { Icon } from "@iconify/react";
import { FieldLabel } from "@measured/puck";

const spacings = {
    1: "size-4",
    2: "size-6",
    3: "size-10",
    4: "size-20",
    5: "size-40",
}

export const Spacer = {
    label: "Spacer",
    fields: {
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