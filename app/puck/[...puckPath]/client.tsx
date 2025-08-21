"use client";

import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";
import config from "../../../puck.config";
import { Icon } from "@iconify/react";
import { puckSlider } from "../../fields/slider";
import { puckToggle } from "../../fields/toggle";

// const togglePreview = () => {
//   dispatch({
//     type: "setUi",
//     ui: {
//       previewMode: previewMode === "edit" ? "interactive" : "edit",
//     },
//   });
// };

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  return (
    <Puck
      config={config}
      data={data}
      overrides={{
        fieldTypes: {
          slider: puckSlider,
          toggle: puckToggle,
        },
      }}
      viewports={[
        {
          width: 480,
          height: "auto", // Optional height. Can be numeric or "auto". Defaults to "auto".
          label: "SM", // Optional. Shown in tooltip.
          icon: <Icon icon="tabler:device-mobile" />, // Optional. Use lucide-icons to align with Puck UI.
        },
        {
          width: 768,
          height: "auto",
          label: "MD",
          icon: <Icon icon="tabler:device-mobile-rotated" />,
        },

        {
          width: 1024,
          height: "auto",
          label: "LG",
          icon: <Icon icon="tabler:device-tablet" />,
        },
        {
          width: 1280,
          height: "auto",
          label: "XL",
          icon: <Icon icon="tabler:device-laptop" />,
        },
        {
          width: "100%",
          height: "auto",
          label: "2XL",
          icon: <Icon icon="tabler:device-desktop" />,
        },
      ]}
      onPublish={async (data) => {
        await fetch("/puck/api", {
          method: "post",
          body: JSON.stringify({ data, path }),
        });
      }}
    />
  );
}
