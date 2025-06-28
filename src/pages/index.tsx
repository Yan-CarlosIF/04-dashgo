import { Button, Flex, Stack } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Input } from "../components/Form/Input";
import { zodResolver } from "@hookform/resolvers/zod";

const signInFormSchema = z.object({
  email: z.string().email("E-mail inválido").nonempty("E-mail obrigatório"),
  password: z.string().min(6, "Senha muito curta").nonempty("Informe a senha"),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInFormData>({ resolver: zodResolver(signInFormSchema) });

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            name="email"
            label="E-mail"
            error={errors.email}
            type="email"
            {...register("email")}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            error={errors.password}
            {...register("password")}
          />
        </Stack>
        <Button
          isLoading={isSubmitting}
          type="submit"
          mt={6}
          size="lg"
          colorScheme="pink"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
