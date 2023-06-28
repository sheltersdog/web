import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import ReduxThunk from 'redux-thunk';
import rootReducer, { rootSaga } from ".";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
      .concat(logger)
      .concat(ReduxThunk)
      .concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch