import { useQuery } from "react-query";
import { api } from "../services/axios";

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface GetUsersResponse {
  users: User[];
  totalCount: number;
}

export async function getUsers(currentPage: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get<{ users: User[] }>("users", {
    params: {
      page: currentPage,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  }));

  return {
    users,
    totalCount,
  };
}

export function useUsers(currentPage: number) {
  const query = useQuery(["users", currentPage], () => getUsers(currentPage), {
    staleTime: 1000 * 60 * 10, // 10 minutes,
  });

  return query;
}
