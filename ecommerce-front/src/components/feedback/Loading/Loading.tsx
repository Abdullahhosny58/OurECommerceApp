import { TLoading } from "../../../types/index";

type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
};

const Loading = ({ status, error, children }: LoadingProps) => {
  if (status === "pending") {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return <>{children}</>;
};

export default Loading;
