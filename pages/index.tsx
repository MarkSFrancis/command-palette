import { Container, Kbd, Text, VStack } from "@chakra-ui/react";
import { HelloWorld } from "../components/HelloWorld/HelloWorld";

export default function Home() {
  return (
    <Container maxW="container.md" py={4}>
      <VStack align="stretch" spacing={4}>
        <HelloWorld />
        <Text>
          Use <Kbd>Ctrl / Cmd</Kbd>+<Kbd>K</Kbd> to open the command palette
        </Text>
      </VStack>
    </Container>
  );
}
