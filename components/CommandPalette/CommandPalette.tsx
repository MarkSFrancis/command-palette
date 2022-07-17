import { Box, Input } from "@chakra-ui/react";
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
} from "kbar";
import { FC } from "react";
import { CommandsProvider } from "../../lib/commands";
import { CommandPaletteResults } from "./CommandPaletteResults";

export const CommandPalette: FC = () => {
  return (
    <KBarProvider actions={[]}>
      <CommandsProvider>
        <KBarPortal>
          <KBarPositioner>
            <Box as={KBarAnimator} boxShadow="dark-lg">
              <Input
                as={KBarSearch}
                background={"white"}
                w="container.md"
                borderBottomRadius={0}
                size="lg"
              />
              <CommandPaletteResults />
            </Box>
          </KBarPositioner>
        </KBarPortal>
      </CommandsProvider>
    </KBarProvider>
  );
};
