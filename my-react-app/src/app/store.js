import { configureStore, combineReducers } from "@reduxjs/toolkit";
import transactionReducer from "../features/transaction/transactionSlice";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import { authAPI } from "../features/auth/authApi";
import authReducer from "../features/auth/authSlice";
import userProfileReducer from "../features/editUserInfo/userProfileSlice";
import { userProfileAPI } from "../features/editUserInfo/userProfileApi";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["auth"], // seules les slices listées ici seront persistées
};

const rootReducer = combineReducers({
  transaction: transactionReducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [userProfileAPI.reducerPath]: userProfileAPI.reducer,
  auth: authReducer,
  userProfile: userProfileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // API Middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(authAPI.middleware)
      .concat(userProfileAPI.middleware),
});

export const persistor = persistStore(store);
