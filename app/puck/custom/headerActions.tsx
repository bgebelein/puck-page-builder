import { createUsePuck, Button } from "@measured/puck";
import { Icon } from "@iconify/react";

export function headerActions({ children }) {
  const usePuck = createUsePuck();
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