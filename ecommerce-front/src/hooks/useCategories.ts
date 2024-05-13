import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetCategories,
  categoriesRecoedCleanUp,
} from "@store/categories/categoriesSlice";
import { useEffect } from "react";

const useCategories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    const promis = dispatch(actGetCategories());
    return () => {
      promis.abort();
      dispatch(categoriesRecoedCleanUp());
    };
  }, [dispatch]);
  return { loading, error, records };
};

export default useCategories;
