import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "@types/productTypes";
import { axiosEroorHandler } from "@util/index";

type TResponse = TProduct[];

const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        `/products?cat_prefix=${prefix}`,
        { signal }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosEroorHandler(error));
    }
  }
);

export default actGetProductsByCatPrefix;
