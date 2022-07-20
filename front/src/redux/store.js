import { configureStore } from "@reduxjs/toolkit";
import api from "../services/api";
import adhkar from "./slice/adhkarSlice";
export default configureStore({
  reducer: { adhkar },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      serializableCheck: false,
    }),
});
