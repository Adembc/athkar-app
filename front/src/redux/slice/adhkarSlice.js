import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../services/api";

export const getAllAdhkar = createAsyncThunk(
  "adhkar/getAdhkar",
  async ({ filter, type }, { getState, rejectWithValue }) => {
    try {
      const { data } = await getData("/adhkar", filter);
      return { data, type };
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  adhkar: {
    morning: [],
    evening: [],
    sleep: [],
    wakeup: [],
    afterPrayer: [],
    roukiaQ: [],
    roukiaSn: [],
    prayer: [],
    other: [],
  },
  loading: "",
};

const adhkarSlice = createSlice({
  name: "adhkar",
  initialState,
  reducers: {
    // setCounter: (state, action) => {
    //   state.adhkar[action.type][action.index].currentCount --;
    // },
    // resetCounter: (state, action) => {
    //   state.adhkar[action.type][action.index].count --;
    // },
  },
  extraReducers: {
    [getAllAdhkar.pending]: (state) => {
      state.loading = "loading";
    },
    [getAllAdhkar.fulfilled]: (state, { payload }) => {
      state.loading = "success";
      state.adhkar[payload.type] = payload.data.payload;
    },
    [getAllAdhkar.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = "failed";
    },
  },
});

export default adhkarSlice.reducer;
