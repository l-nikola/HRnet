import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import employeeReducer from "./slices/employeeSlice";

// Persists the Redux store in localStorage for data survives page refreshes
const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, employeeReducer);

export const store = configureStore({
  reducer: { employees: persistedReducer },
});

export const persistor = persistStore(store);
