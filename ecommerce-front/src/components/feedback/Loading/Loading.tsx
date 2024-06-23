import { TLoading } from "../../../types/index";
import LottieHandler from "../LottieHandler/LottieHandler";
import CartSkeleton from "../skeletons/CartSkeleton/CartSkeleton";
import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton/ProductSkeleton";
const skeletonsTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
};
type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
  type?: keyof typeof skeletonsTypes;
};

const Loading = ({
  status,
  error,
  children,
  type = "category",
}: LoadingProps) => {
  const Componet = skeletonsTypes[type];

  if (status === "pending") {
    return <Componet />;
  }
  if (error) {
    return (
      <div>
        <LottieHandler type="error" message={error as string} />
      </div>
    );
  }

  return <>{children}</>;
};

export default Loading;
