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
import { Collapsible } from "./app/components/collapsible";
import { Faq } from "./app/sections/faq";
import { Stats } from "./app/sections/stats";
import { Callout } from "./app/components/callout";

export const config: Config = {
  categories: {
    layout: {
      title: "Layout",
      components: ["Section", "Stack", "Spacer"],
    },
    content: {
      title: "Content",
      components: [
        "Headline",
        "Bodytext",
        "PuckButton",
        "PuckCard",
        "Collapsible",
        "Callout",
      ],
    },
    sections: {
      title: "Sections",
      components: ["Hero", "Stats", "Team", "Faq", "Footer"],
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
    Collapsible,
    Faq,
    Stats,
    Callout,
  },
};

export default config;
