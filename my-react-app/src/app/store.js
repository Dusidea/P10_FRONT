import { configureStore, combineReducers } from "@reduxjs/toolkit";
import transactionReducer from "../features/transaction/transactionSlice";
import transactionItemReducer from "../features/transactionItem/transactionItemSlice";
import { authAPI } from "../features/auth/authApi";
import authReducer from "../features/auth/authSlice";

const rootReducer = combineReducers({
  transaction: transactionReducer,
  transactionItem: transactionItemReducer,
  [authAPI.reducerPath]: authAPI.reducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware pour l'API
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authAPI.middleware),
});
