import { isAxiosError } from "axios";

const axiosEroorHandler = (error: unknown) => {
  if (isAxiosError(error)) {
    return error.response?.data.message || error.message;
  } else {
    return "An unexpected error";
  }
};

export default axiosEroorHandler;
