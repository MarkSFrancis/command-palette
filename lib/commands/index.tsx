import { EditIcon, MoonIcon, RepeatIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { useRegisterActions } from "kbar";
import React, { FC, PropsWithChildren } from "react";
import { showInputBox } from "./inputBox";
import { showQuickPick } from "./quickPick";

export const CommandsProvider: FC<PropsWithChildren<Record<never, never>>> = ({
  children,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  useRegisterActions(
    [
      {
        id: "toggleTheme",
        name: "Toggle theme",
        icon: colorMode === "light" ? <MoonIcon /> : <SunIcon />,
        perform: () => toggleColorMode(),
      },
    ],
    [colorMode, toggleColorMode]
  );

  useRegisterActions([
    {
      id: "refresh",
      name: "Refresh",
      icon: <RepeatIcon />,
      keywords: "reload",
      perform: () => window.location.reload(),
    },
    {
      id: "toggleEditMode",
      name: "Toggle edit mode",
      icon: <EditIcon />,
      perform: () =>
        (document.designMode = document.designMode === "on" ? "off" : "on"),
    },
  ]);

  return <>{children}</>;
};

export const commands_INTERNAL = {
  showInputBox,
  showQuickPick,
};
