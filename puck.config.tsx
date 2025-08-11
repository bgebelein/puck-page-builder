import type { Config } from "@measured/puck";
import { Headline } from "./app/components/headline";
import { Section } from "./app/components/section";
import { Button } from "./app/components/button";
import { Footer } from "./app/sections/footer";
import { Stack } from "./app/components/Stack";
import { Spacer } from "./app/components/spacer";
import { Hero } from "./app/sections/hero";

export const config: Config = {
  categories: {
    layout: {
      title: "Layout",
      components: ["Section", "Stack", "Spacer"],
    },
    content: {
      title: "Content",
      components: ["Headline", "Button"],
    },
    sections: {
      title: "Sections",
      components: ["Hero", "Footer"],
    },
  },
  components: {
    Headline,
    Button,
    Section,
    Footer,
    Stack,
    Spacer,
    Hero,
  },
};

export default config;
