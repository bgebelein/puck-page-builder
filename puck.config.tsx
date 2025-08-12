import type { Config } from "@measured/puck";
import { Headline } from "./app/components/headline";
import { Section } from "./app/components/section";
import { Button } from "./app/components/button";
import { Footer } from "./app/sections/footer";
import { Stack } from "./app/components/Stack";
import { Spacer } from "./app/components/spacer";
import { Hero } from "./app/sections/hero";
import { Team } from "./app/sections/team";
import { Card } from "./app/components/card";

export const config: Config = {
  categories: {
    layout: {
      title: "Layout",
      components: ["Section", "Stack", "Spacer"],
    },
    content: {
      title: "Content",
      components: ["Headline", "Button", "Card"],
    },
    sections: {
      title: "Sections",
      components: ["Hero", "Team", "Footer"],
    },
  },
  components: {
    Headline,
    Button,
    Card,
    Section,
    Footer,
    Stack,
    Spacer,
    Hero,
    Team,
  },
};

export default config;
