import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./features/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "cart",
  storage,
  // whitelist: ["cartProducts"], // only persist cartProducts
};

const persistedCart = persistReducer(persistConfig, cartSlice.reducer);

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: persistedCart, // Use the persisted cart reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type RootDispatch = AppStore["dispatch"];

// Create the store instance
export const store = makeStore();

// Create the persistor
export const persistor = persistStore(store);
