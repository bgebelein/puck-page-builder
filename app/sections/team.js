import { Icon } from "@iconify/react";

export const Team = {
    label: "Team",
    fields: {
        bgColor: {
            label: "Background Color",
            labelIcon: <Icon icon="lucide:paint-bucket" />,
            type: "select",
            options: [
                { label: "None", value: "bg-transparent" },
                { label: "White", value: "bg-white" },
                { label: "Black", value: "bg-black text-white" },
                { label: "Muted", value: "bg-blue-50" },
                { label: "Theme", value: "bg-blue-700 text-white" },
            ],
        },
        title: {
            label: "Headline",
            labelIcon: <Icon icon="lucide:heading" />,
            type: "text",
        },
        subline: {
            label: "Subline",
            labelIcon: <Icon icon="lucide:type" />,
            type: "textarea",
        },
        members: {
            label: "Team Members",
            labelIcon: <Icon icon="lucide:users" />,
            type: "array",
            arrayFields: {
                name: {
                    label: "Team Member Name",
                    labelIcon: <Icon icon="lucide:user" />,
                    type: "text"
                },
                portrait: {
                    label: "Team Member Image URL",
                    labelIcon: <Icon icon="lucide:link" />,
                    type: "text"
                },
            },
        },
    },
    defaultProps: {
        bgColor: "bg-transparent",
        title: "Team member introduction",
        subline: "Our team is made up of talented individuals who are passionate about what they do.",
        members: [
            {
                name: "Alice Johnson",
                portrait: "https://mockmind-api.uifaces.co/content/human/125.jpg",
            },
            {
                name: "Bob Smith",
                portrait: "https://mockmind-api.uifaces.co/content/human/80.jpg",
            },
            {
                name: "Charlie Brown",
                portrait: "https://mockmind-api.uifaces.co/content/human/104.jpg",
            },
        ],
    },
    render: ({ bgColor, title, subline, members }) => {
        return (
            <section className={`py-30 ${bgColor}`}>
                <div className="container">
                    <h2>{title}</h2>
                    <p>{subline}</p>
                    <ul className="grid auto-cols-fr grid-flow-col gap-8 mt-12">
                        {members.map((member, i) => (
                            <li className="card flex flex-col items-center" key={i}>
                                <img src={member.portrait} alt={member.name} className="w-24 h-24 rounded-full" />
                                <h3>{member.name}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        )
    },
}