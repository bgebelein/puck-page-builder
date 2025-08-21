import { FieldLabel } from "@measured/puck";

export const puckToggle = ({ field, onChange, value }) => (
    <FieldLabel label={field.label} icon={field.icon}>
        <input
            type="checkbox"
            defaultValue={value}
            name={field.label}
            onChange={(e) => onChange(e.currentTarget.value)}
            checked={value}
        />
    </FieldLabel>
)