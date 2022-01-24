import { useQuery } from "react-query";
import { client } from "./index";

const getUser = (id: number): Promise<User> =>
  client.get(`/users/${id}`).then((res) => res.data);

export const useGetUser = (id: number | undefined) =>
  useQuery<User>(["user", id], () => getUser(id!), {
    enabled: id != null,
    suspense: true,
  });
