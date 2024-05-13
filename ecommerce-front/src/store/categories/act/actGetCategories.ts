import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategory } from "../../../types/index";
import { axiosEroorHandler } from "@util/index";

type TResponse = TCategory[];

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<TResponse>("/category", { signal });
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosEroorHandler(error));
    }
  }
);

export default actGetCategories;
