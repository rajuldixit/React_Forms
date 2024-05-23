import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDeaultMiddleware) => getDeaultMiddleware().concat(thunk)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
