import { Heading } from "@components/common";
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";

import { Loading } from "@components/feedback";
import useCart from "@hooks/useCart";
const Cart = () => {
  const { changeQuantityHandler, error, loading, products, removeItemHandler } =
    useCart();
  return (
    <>
      <Heading title="Shopping Cart" />
      <Loading status={loading} error={error}>
        {products.length ? (
          <>
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />
            <CartSubtotalPrice products={products} />{" "}
          </>
        ) : (
          "Your Cart is empty"
        )}
      </Loading>
    </>
  );
};

export default Cart;
