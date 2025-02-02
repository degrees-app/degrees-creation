import { configureStore } from '@reduxjs/toolkit';
import bollReducer from '../entities/boll/model/bollSlice';
import interfaceReducer from '../entities/interface/model/interfaceSlice';
import backroundReducer from '../entities/backround/model/backroundSlice';
import { skinApiSlice } from '../entities/skin/api/skin';
import { setupListeners } from '@reduxjs/toolkit/query';
import { soundApiSlice } from '../entities/sound/api/sound';

export const store = configureStore({
  reducer: {
    boll: bollReducer,
    interface: interfaceReducer,
    backround: backroundReducer,

    // Редьюсеры категорий
    [skinApiSlice.reducerPath]: skinApiSlice.reducer,
    [soundApiSlice.reducerPath]: soundApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(skinApiSlice.middleware)
      .concat(soundApiSlice.middleware),
});

setupListeners(store.dispatch);

// Извлекаем тип состояния приложения
export type RootState = ReturnType<typeof store.getState>;
// Тип состояния для всех редьюсеров в хранилище

// Тип диспетчера для отправки действий
export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;
