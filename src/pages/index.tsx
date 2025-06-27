import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex as="div" w="100%" h="100vh" justify="center" align="center">
      <Flex
        flexDir="column"
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
      >
        <Stack spacing={4}>
          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="Senha" type="password" />
        </Stack>
        <Button type="submit" mt={6} size="lg" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
