import { ChakraProvider } from "@chakra-ui/react";
import { CommandPalette } from "../components/CommandPalette/CommandPalette";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <CommandPalette />
    </ChakraProvider>
  );
}

export default MyApp;
