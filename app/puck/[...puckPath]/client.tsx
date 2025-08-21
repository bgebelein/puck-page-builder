"use client";

import type { Data } from "@measured/puck";
import { Puck, createUsePuck, Button } from "@measured/puck";
import config from "../../../puck.config";
import { Icon } from "@iconify/react";
import { puckSlider } from "../../fields/slider";
import { puckToggle } from "../../fields/toggle";

const usePuck = createUsePuck();

function HeaderActions({ children }: { children: React.ReactNode }) {
  const dispatch = usePuck((s) => s.dispatch);
  const previewMode = usePuck((s) => s.appState.ui.previewMode);

  const togglePreview = () => {
    dispatch({
      type: "setUi",
      ui: {
        previewMode: previewMode === "interactive" ? "edit" : "interactive",
        leftSideBarVisible: previewMode === "interactive" ? true : false,
        rightSideBarVisible: previewMode === "interactive" ? true : false,
      },
    });
  };

  return (
    <>
      <Button onClick={togglePreview} variant="secondary">
        <Icon icon={previewMode === "interactive" ? "lucide:pen" : "lucide:eye"} className="size-4"></Icon>{previewMode === "interactive" ? "Edit" : "Preview"}
      </Button>
      {children}
    </>
  );
}

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
        headerActions: HeaderActions,
      }}
      viewports={[
        {
          width: 480,
          height: "auto",
          label: "SM",
          icon: <Icon icon="tabler:device-mobile" />,
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
