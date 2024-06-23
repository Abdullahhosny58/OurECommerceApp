import { Category } from "@components/eCommerce";

import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import useCategories from "@hooks/useCategories";
import { TCategory } from "../types/categoryTypes";

const Categories = () => {
  const { loading, error, records } = useCategories();
  return (
    <>
      <Heading title="categories" />
      <Loading status={loading} error={error} type="category">
        <GridList<TCategory>
          emptyMessage="There are no categories"
          records={records}
          renderItems={(record) => <Category {...record} />}
        />
      </Loading>
    </>
  );
};

export default Categories;
