import { Icon } from "@iconify/react";

export const Footer = {
    label: "Footer",
    fields: {
        bgColor: {
            label: "Background Color",
            labelIcon: <Icon icon="lucide:paint-bucket" />,
            type: "select",
            options: [
                { label: "White", value: "bg-white" },
                { label: "Black", value: "bg-black text-white" },
                { label: "Muted", value: "bg-blue-50" },
                { label: "Theme", value: "bg-blue-700 text-white" },
            ],
        },
    },
    render: ({ bgColor }) => {
        return (
            <footer className={`py-4 flex items-center justify-around ${bgColor}`}>
                <p className="text-slate-50">Made with <Icon icon="lucide:heart" className="mx-2 text-red-500" /> by Bent Gebelein</p>
            </footer>
        )
    },
}