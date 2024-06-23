import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "@store/index";
import axiosEroorHandler from "@util/axiosEroorHandler";
import { TOrderItem } from "../../../types/order.types";

type TResponse = TOrderItem[];

const actGetUserOrders = createAsyncThunk(
  "orders/actGetUserOrders",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, signal } = thunkAPI;
    const { auth } = getState() as RootState;

    try {
      const res = await axios.get<TResponse>(
        `/orders?userId=${auth.user?.id}`,
        {
          signal,
        }
      );

      const orders = res.data.map((el) => ({
        id: el.id,
        subtotal: el.subtotal,
        items: el.items,
      }));

      return orders;
    } catch (error) {
      return rejectWithValue(axiosEroorHandler(error));
    }
  }
);

export default actGetUserOrders;
