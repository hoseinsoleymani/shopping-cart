import { useQuery } from "react-query";
import { client } from ".";

const getProducts = (): Promise<ProductType[]> =>
  client
    .get("/products")
    .then((res) => res.data)
    .catch((ex) => ex);

export const useProducts = () =>
  useQuery<ProductType[]>("products", getProducts, {});