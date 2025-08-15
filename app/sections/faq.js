import { Icon } from "@iconify/react";

export const Faq = {
    label: "FAQ",
    fields: {
        content: {
            type: "slot",
            allow: ["Collapsible"],
        },
        bgColor: {
            label: "Background Color",
            labelIcon: <Icon icon="lucide:paint-bucket" />,
            type: "select",
            options: [
                { label: "None", value: "bg-transparent" },
                { label: "Light", value: "bg-light" },
                { label: "Dark", value: "bg-dark" },
                { label: "Muted", value: "bg-muted" },
                { label: "Theme", value: "bg-theme" },
            ],
        },
        anchorId: {
            label: "ID",
            labelIcon: <Icon icon="lucide:hash" />,
            type: "text",
        },
        intro: {
            label: "Introduction",
            labelIcon: <Icon icon="lucide:captions" />,
            type: "object",
            objectFields: {
                title: {
                    label: "Headline",
                    labelIcon: <Icon icon="lucide:heading" />,
                    type: "text",
                    contentEditable: true,
                },
                subline: {
                    label: "Subline",
                    labelIcon: <Icon icon="lucide:type" />,
                    type: "textarea",
                    contentEditable: true,
                },
            }
        },
    },
    defaultProps: {
        bgColor: "bg-transparent",
        anchorId: "faq",
        intro: {
            title: "Frequently Asked Questions",
            subline: "Here are some common questions and answers to help you understand our services better.",
        },
        content: [
            {
                type: "Collapsible",
                props: {
                    title: "Question 1",
                    bgColor: "bg-light",
                    content: [
                        {
                            type: "Bodytext",
                            props: {
                                text: "This is the answer to question 1. It provides detailed information about the topic.",
                                size: "text-lg",
                                alignment: "text-left",
                            }
                        }
                    ]
                },
            },
            {
                type: "Collapsible",
                props: {
                    title: "Question 2",
                    bgColor: "bg-light",
                    content: [
                        {
                            type: "Bodytext",
                            props: {
                                text: "This is the answer to question 2. It provides detailed information about the topic.",
                                size: "text-lg",
                                alignment: "text-left",
                            }
                        }
                    ]
                },
            },
            {
                type: "Collapsible",
                props: {
                    title: "Question 3",
                    bgColor: "bg-light",
                    content: [
                        {
                            type: "Bodytext",
                            props: {
                                text: "This is the answer to question 3. It provides detailed information about the topic.",
                                size: "text-lg",
                                alignment: "text-left",
                            }
                        }
                    ]
                },
            },
        ],
    },
    render: ({ bgColor, anchorId, intro, content: Content }) => {
        return (
            <section id={anchorId} className={`py-30 ${bgColor}`}>
                <div className="container">
                    <div className="max-w-4xl">
                        <h2>{intro.title}</h2>
                        {intro.subline && <p className="text-2xl mb-12">{intro.subline}</p>}
                    </div>
                    <Content className="flex flex-col gap-4 md:gap-6" />
                </div>
            </section>
        )
    },
}