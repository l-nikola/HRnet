import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import employeeReducer from "./slices/employeeSlice";

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, employeeReducer);

export const store = configureStore({
  reducer: { employees: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
