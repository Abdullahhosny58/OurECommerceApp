import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import useProduct from "@hooks/useProduct";

export const Products = () => {
  const { error, loading } = useProduct();
  return (
    <>
      <Heading title={`${params.prefix?.toUpperCase()}Prodects`} />

      <Loading status={loading} error={error}>
        <GridList
          records={productsFullInfo}
          renderItems={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};
