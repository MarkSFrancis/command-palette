import { Box, forwardRef, useColorModeValue, Wrap } from "@chakra-ui/react";
import { KBarResults, useMatches } from "kbar";
import { FC } from "react";

type ResultRenderParams = Parameters<
  Parameters<typeof KBarResults>[0]["onRender"]
>[0];

export const CommandPaletteResults: FC = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={(props) => <CommandPaletteResult {...props} />}
    />
  );
};

const CommandPaletteResult = forwardRef<ResultRenderParams, typeof Box>(
  (props, ref) => {
    const activeBackground = useColorModeValue(
      "blackAlpha.200",
      "whiteAlpha.200"
    );

    if (typeof props.item === "string") {
      return <Box ref={ref}>{props.item}</Box>;
    } else {
      return (
        <Box
          ref={ref}
          p={4}
          background={props.active ? activeBackground : "transparent"}
          borderLeftWidth={5}
          borderLeftColor={props.active ? "blue.500" : "transparent"}
        >
          <Wrap spacing={2}>
            {props.item.icon ?? <></>}
            {props.item.name}
          </Wrap>
        </Box>
      );
    }
  }
);
