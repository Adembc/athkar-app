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
  adhkarCount: {
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
  loading: false,
};

const adhkarSlice = createSlice({
  name: "adhkar",
  initialState,
  reducers: {
    setCount: (state, { payload: { type, index } }) => {
      if (+state.adhkarCount[type][index] > 0) state.adhkarCount[type][index]--;
      if (+state.adhkarCount[type][index] === 0)
        state.adhkar[type][index].done = true;
    },
    resetCounter: (state, { payload: { type, index } }) => {
      if (state.adhkarCount[type][index] > 0) return;
      state.adhkarCount[type][index] =
        +state.adhkar[type][index].count + 1 || 1;
      state.adhkar[type][index].done = false;
    },
  },
  extraReducers: {
    [getAllAdhkar.pending]: (state) => {
      state.loading = true;
    },
    [getAllAdhkar.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.adhkar[payload.type] = payload.data.payload;
      state.adhkarCount[payload.type] = payload.data.payload.map((ele) =>
        ele.count ? ele.count : 0
      );
    },
    [getAllAdhkar.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});
export const adhkarActions = adhkarSlice.actions;
export default adhkarSlice.reducer;
