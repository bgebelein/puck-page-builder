import { ComponentConfig } from "@measured/puck";
import { Button } from "./button";
import { Icon } from "@iconify/react";

export const Header = ({
    logo,
    navitems = [],
    ctaButton = {
        url: "#",
        style: "themePrimary",
        label: "Label",
        leadingIcon: "lucide:circle",
        trailingIcon: "lucide:circle",
    }
}) => {
    return (
        <header className="bg-white p-4 relative z-10 shadow-lg">
            <div className="container flex items-center justify-between">
                {logo && <img className="max-h-12" src={logo} alt="Logo" title="Logo" />}
                <nav>
                    <menu className="flex items-center gap-6">
                        {navitems.map(
                            (item, index) => (
                                <li key={index}>
                                    <a href={item.url}>{item.label}</a>
                                </li>
                            )
                        )}
                    </menu>
                </nav>
                {ctaButton && <Button
                    url={ctaButton.url}
                    style={ctaButton.style}
                    label={ctaButton.label}
                    leadingIcon={ctaButton.leadingIcon}
                    trailingIcon={ctaButton.trailingIcon}
                />}
            </div>
        </header>
    )
}

export const PuckHeader: ComponentConfig = {
    label: "Header",
    fields: {
        logo: {
            label: "Logo URL",
            labelIcon: <Icon icon="lucide:image" />,
            type: "text",
        },
        navitems: {
            type: "array",
            arrayFields: {
                label: {
                    type: "text",
                },
                url: {
                    type: "text",
                },
            },
        },
        button: {
            label: "Button",
            labelIcon: <Icon icon="lucide:captions" />,
            type: "object",
            objectFields: {
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
            }
        }
    },
    defaultProps: {
        logo: "https://cdn.brandfetch.io/idOPDYImH9/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667644681223",
        navitems: [
            { label: "Home", url: "#" },
            { label: "About", url: "#" },
            { label: "Services", url: "#" },
            { label: "Contact", url: "#" },
        ],
        button: {
            label: "Contact Us",
            url: "#",
            style: "themePrimary",
            leadingIcon: "lucide:phone-call",
            trailingIcon: "",
        }
    },
    permissions: {
        delete: false,
        drag: false,
        duplicate: false,
    },
    render: ({ logo, navitems, button }) => {
        return <Header
            logo={logo}
            navitems={navitems}
            ctaButton={{
                label: button.label,
                url: button.url,
                style: button.style,
                leadingIcon: button.leadingIcon,
                trailingIcon: button.trailingIcon,
            }}
        />;
    }
}