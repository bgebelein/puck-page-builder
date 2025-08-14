import type { Config } from "@measured/puck";
import { Headline } from "./app/components/headline";
import { Bodytext } from "./app/components/bodytext";
import { Section } from "./app/components/section";
import { PuckButton } from "./app/components/button";
import { Footer } from "./app/sections/footer";
import { Stack } from "./app/components/Stack";
import { Spacer } from "./app/components/spacer";
import { Hero } from "./app/sections/hero";
import { Team } from "./app/sections/team";
import { PuckCard } from "./app/components/card";
import { PuckHeader } from "./app/components/header";

export const config: Config = {
  categories: {
    layout: {
      title: "Layout",
      components: ["Section", "Stack", "Spacer"],
    },
    content: {
      title: "Content",
      components: ["Headline", "Bodytext", "PuckButton", "PuckCard"],
    },
    sections: {
      title: "Sections",
      components: ["Hero", "Team", "Footer"],
    },
    hidden: {
      components: ["PuckHeader"],
      visible: false,
    },
  },
  components: {
    Headline,
    PuckButton,
    PuckCard,
    Section,
    Footer,
    Stack,
    Spacer,
    Hero,
    Team,
    Bodytext,
    PuckHeader,
  },
  root: {
    fields: {
      content: {
        type: "slot",
      },
    },
    defaultProps: {
      content: [
        {
          type: "PuckHeader",
        },
      ],
    },
    render: ({ content: Content }) => {
      return <Content />;
    },
  },
};

export default config;
