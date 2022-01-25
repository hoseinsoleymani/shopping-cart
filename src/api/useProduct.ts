import { useQuery } from "react-query";
import { client } from ".";

const getProduct = async (id: string | undefined) =>
  client.get<ProductType>(`/products/${id}`).then((res) => res.data);

export const useProduct = (id: string | undefined) =>
  useQuery<ProductType>(["product", id], () => getProduct(id), {
    enabled: id != null,
    onError(error) {
      console.log(error);
    },
    suspense: true,
  });
