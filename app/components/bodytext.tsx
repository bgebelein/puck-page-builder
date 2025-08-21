import { ComponentConfig } from "@measured/puck";
import { Icon } from "@iconify/react";

export const Bodytext: ComponentConfig = {
  label: "Text",
  fields: {
    text: {
      label: "Text",
      labelIcon: <Icon icon="lucide:type" />,
      type: "textarea",
      placeholder: "Enter your text here",
      contentEditable: true,
    },
    size: {
      type: "radio",
      label: "Size",
      labelIcon: <Icon icon="lucide:a-large-small" />,
      options: [
        { label: "Large", value: "text-2xl" },
        { label: "Medium", value: "text-xl" },
        { label: "Small", value: "text-lg" },
      ],
    },
    alignment: {
      type: "radio",
      label: "Alignment",
      labelIcon: <Icon icon="lucide:align-left" />,
      options: [
        { label: "Start", value: "text-left" },
        { label: "Center", value: "text-center" },
        { label: "End", value: "text-right" },
      ],
    },
  },
  defaultProps: {
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    size: "text-xl",
    alignment: "text-left",
  },
  render: ({ text, size, alignment }) => {
    return <p className={`${size} ${alignment}`}>{text}</p>;
  }
}