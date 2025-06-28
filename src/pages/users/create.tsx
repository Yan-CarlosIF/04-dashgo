import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import NextLink from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const createUserFormSchema = z
  .object({
    name: z.string().nonempty("Nome obrigatório"),
    email: z.string().email("E-mail inválido").nonempty("E-mail obrigatório"),
    password: z
      .string()
      .min(6, "Senha muito curta")
      .nonempty("Senha obrigatória"),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "As senhas precisam ser iguais",
    path: ["password_confirmation"],
  });

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={["6", "8"]}>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                {...register("name")}
                error={errors.name}
                name="name"
                label="Nome completo"
              />
              <Input
                {...register("email")}
                error={errors.email}
                name="email"
                type="email"
                label="E-mail"
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                error={errors.password}
                {...register("password")}
                name="password"
                type="password"
                label="Senha"
              />
              <Input
                error={errors.password_confirmation}
                {...register("password_confirmation")}
                name="password_confirmation"
                type="password"
                label="Confirme a senha"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <NextLink href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </NextLink>
              <Button type="submit" isLoading={isSubmitting} colorScheme="pink">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
