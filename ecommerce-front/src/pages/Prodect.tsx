import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import useProduct from "@hooks/useProduct";
import { TProduct } from "../types/productTypes";

const Products = () => {
  const { loading, error, productPrefix, productsFullInfo } = useProduct();
  return (
    <>
      <Heading title={`${productPrefix?.toUpperCase()}Prodects`} />

      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="There are no Products "
          records={productsFullInfo}
          renderItems={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Products;
