import { Icon } from "@iconify/react";

export const Root = {
    fields: {
        title: {
            label: "Page Title",
            labelIcon: <Icon icon="lucide:type" />,
            type: "text",
            placeholder: "Set your page title here",
        },
        description: {
            label: "Meta Description",
            labelIcon: <Icon icon="lucide:type" />,
            type: "textarea",
            placeholder: "Add a <meta> description for SEO",
        },
        url: {
            label: "Page URL",
            labelIcon: <Icon icon="lucide:link" />,
            type: "text",
            placeholder: "https://example.com/",
        },
        imgUrl: {
            label: "Meta image URL",
            labelIcon: <Icon icon="lucide:image" />,
            type: "text",
            placeholder: "https://example.com/meta-img.jpg",
        },
    },
    render: ({ children, title, description, url, imgUrl }) => {
        return (
            <>
                <head>
                    {/* Basics */}
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {/* Basic SEO Meta Tags */}
                    <title>{title}</title>
                    <meta name="title" content={title} />
                    <meta name="description" content={description} />
                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={url} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image" content={imgUrl} />
                    {/* X / Twitter */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content={url} />
                    <meta property="twitter:title" content={title} />
                    <meta property="twitter:description" content={description} />
                    <meta property="twitter:image" content={imgUrl} />
                    {/* Google Fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,600;1,600&display=swap" rel="stylesheet" />
                </head>
                <body>{children}</body>
            </>
        );
    },
}
