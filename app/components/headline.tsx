import { ComponentConfig } from "@measured/puck";
import { Icon } from "@iconify/react";

export const Headline: ComponentConfig = {
  label: "Headline",
  fields: {
    title: {
      label: "Headline",
      labelIcon: <Icon icon="lucide:heading" />,
      type: "text",
      placeholder: "Enter your headline here",
      contentEditable: true,
    },
    hierarchy: {
      label: "Hierarchy",
      type: "select",
      labelIcon: <Icon icon="lucide:list-ordered" />,
      options: [
        { label: "Headline 1", value: "h1" },
        { label: "Headline 2", value: "h2" },
        { label: "Headline 3", value: "h3" },
        { label: "Headline 4", value: "h4" },
        { label: "Headline 5", value: "h5" },
        { label: "Headline 6", value: "h6" },
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
    title: "Headline",
    hierarchy: "h2",
    alignment: "text-left",
  },
  render: ({ title, hierarchy, alignment }) => {
    switch (hierarchy) {
      case "h1":
        return <h1 className={`${alignment}`}>{title}</h1>;
      case "h2":
        return <h2 className={`${alignment}`}>{title}</h2>;
      case "h3":
        return <h3 className={`${alignment}`}>{title}</h3>;
      case "h4":
        return <h4 className={`${alignment}`}>{title}</h4>;
      case "h5":
        return <h5 className={`${alignment}`}>{title}</h5>;
      case "h6":
        return <h6 className={`${alignment}`}>{title}</h6>;
    }
  }
}