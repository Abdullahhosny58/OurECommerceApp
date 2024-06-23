import { TProduct } from "./productTypes";

export type TOrderItem = {
  id: number;
  subtotal: number;
  items: TProduct[];
};
