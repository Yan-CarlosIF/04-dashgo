import { useQuery } from "react-query";
import { api } from "../services/axios";

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export async function getUsers(): Promise<User[]> {
  const response = await api.get<{ users: User[] }>("users");
  const users = response.data.users;

  return users.map((user) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  }));
}

export function useUsers() {
  const query = useQuery("users", getUsers, {
    staleTime: 1000 * 5, // 5 seconds
  });

  return query;
}
