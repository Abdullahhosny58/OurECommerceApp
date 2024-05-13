import { Category } from "@components/eCommerce";

import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import useCategories from "@hooks/useCategories";

const Categories = () => {
  const { loading, error, records } = useCategories();
  return (
    <>
      <Heading title="categories" />
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItems={(record) => <Category {...record} />}
        />
      </Loading>
    </>
  );
};

export default Categories;
