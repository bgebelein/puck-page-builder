import { FieldLabel } from "@measured/puck";

export const puckSlider = {
    type: "custom",
    render: ({ field, onChange, value }) => (
        <FieldLabel label={field.label} icon={field.icon}>
            <input
                type="range"
                min={field.min}
                max={field.max}
                step={field.step}
                defaultValue={value}
                name={field.label}
                onChange={(e) => onChange(e.currentTarget.value)}
            />
        </FieldLabel>
    ),
};