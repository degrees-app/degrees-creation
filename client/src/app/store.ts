import { configureStore } from '@reduxjs/toolkit';
import ballReducer from '../entities/ball/model/ballSlice';
import interfaceReducer from '../entities/interface/model/interfaceSlice';
import backgroundReducer from '../entities/background/model/backgroundSlice';
// import soundReducer from '../entities/sound/model/soundSlice'
import { skinApiSlice } from '../entities/skin/api/skin';
import { setupListeners } from '@reduxjs/toolkit/query';
import { soundApiSlice } from '../entities/sound/api/sound';
import { ballApiSlice } from '../entities/ball/api/ball';

export const store = configureStore({
  reducer: {
    ball: ballReducer,
    interface: interfaceReducer,
    background: backgroundReducer,

    // Редьюсеры категорий
    [skinApiSlice.reducerPath]: skinApiSlice.reducer,
    [soundApiSlice.reducerPath]: soundApiSlice.reducer,
    [ballApiSlice.reducerPath]: ballApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(skinApiSlice.middleware)
      .concat(soundApiSlice.middleware)
      .concat(ballApiSlice.middleware),
});

setupListeners(store.dispatch);

// Извлекаем тип состояния приложения
export type RootState = ReturnType<typeof store.getState>;
// Тип состояния для всех редьюсеров в хранилище

// Тип диспетчера для отправки действий
export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;
