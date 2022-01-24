import { client } from "./index";
import { useMutation } from "react-query";
import { useAuthStore } from "../store/store";

export interface LoginBody {
  identifier: string;
  password: string;
}

interface AuthResponse {
  jwt: string;
  user: User;
}

const loginUser = (user: LoginBody) =>
  client.post<AuthResponse>(`/auth/local`, user).then((res) => res.data);

export const useLogin = () => {
  const { login } = useAuthStore();

  return useMutation(loginUser, {
    onSuccess(data) {
      login(data.user);
    },
  });
};
