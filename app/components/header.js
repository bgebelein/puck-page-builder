import { Button } from "./button";

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
        <header className="fixed top-8 left-1/2 -translate-x-1/2 z-10 w-full px-8">
            <div className="container flex items-center justify-between bg-white p-4 rounded-2xl shadow-2xl">
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

export const PuckHeader = {
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
    },
    render: ({ navitems }) => {
        return <Header
            logo={logo}
            navitems={navitems}
            ctaButton={{
                label: label,
                url: url,
                style: style,
                leadingIcon: leadingIcon,
                trailingIcon: trailingIcon,
            }}
        />;
    }
}