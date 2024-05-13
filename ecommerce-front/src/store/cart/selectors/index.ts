import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../index";

const getCartTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    console.log("fire");

    const totalQuantity = Object.values(items).reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    return totalQuantity;
  }
);
export { getCartTotalQuantitySelector };
