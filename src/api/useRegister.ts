import { useMutation } from "react-query";
import { client } from "./index";
export interface RegisterBody {
  username: string;
  email: string;
  password: string;
}

interface ApiError {}

const registerUser = (user: RegisterBody) =>
  client.post(`/auth/local/register`, user).then((res) => res.data);

export const useRegister = () => useMutation(registerUser);
