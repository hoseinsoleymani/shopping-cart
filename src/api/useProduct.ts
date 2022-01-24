import { useQuery } from "react-query";
import { client } from ".";

const getProduct = async (
  id: string | undefined
): Promise<ProductType | string> =>
  client
    .get(`/products/${id}`)
    .then((res) => res.data)
    .catch(() => "Something went wrong....");

export const useProduct = (id: string | undefined) =>
  useQuery<ProductType | string>(["product", id], () => getProduct(id));
