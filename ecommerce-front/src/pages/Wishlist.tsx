import { GridList, Heading } from "@components/common";
import { Loading } from "@components/feedback";
import { TProduct } from "@types/productTypes";

import { Product } from "@components/eCommerce";
import useWishlist from "@hooks/useWishlist";

const Wishlist = () => {
  const { error, loading, records } = useWishlist();
  return (
    <>
      <Heading title="Your Wishlist" />
      <Loading status={loading} error={error}>
        <GridList<TProduct>
          records={records}
          renderItems={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Wishlist;
