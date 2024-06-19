// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from 'redux-persist/lib/storage';
// import heroReducer from "./heroSlice";
// import { version } from 'react';
// import persistReducer from 'redux-persist/es/persistReducer';

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistReducer = persistReducer(persistConfig, heroReducer);

// export const store = configureStore({
//   reducer: { hero : persistReducer},
//   middleware: (getDefaultMiddleWare) => 
//     getDefaultMiddleWare({
//       serializableCheck: {
//         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     })
// })

// export let persistor = persistStore(store);


import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import bazarReducer from "./heroSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, bazarReducer);

export const store = configureStore({
  reducer: { bazar: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);