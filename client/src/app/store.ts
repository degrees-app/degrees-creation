import { configureStore } from '@reduxjs/toolkit';
import ballReducer from '../entities/ball/model/ballSlice';
import interfaceReducer from '../entities/interface/model/interfaceSlice';
import backgroundReducer from '../entities/background/model/backgroundSlice';

import { skinApiSlice } from '../entities/skin/api/skin';
import { soundApiSlice } from '../entities/sound/api/sound';
import { backgroundApiSlice } from '../entities/background/model/backgroundApiSlice'; // ✅ Добавили API для фона

import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    ball: ballReducer,
    interface: interfaceReducer,
    background: backgroundReducer,

    // ✅ Подключаем API Slice'ы
    [skinApiSlice.reducerPath]: skinApiSlice.reducer,
    [soundApiSlice.reducerPath]: soundApiSlice.reducer,
    [backgroundApiSlice.reducerPath]: backgroundApiSlice.reducer, // ✅ API для фона
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(skinApiSlice.middleware)
      .concat(soundApiSlice.middleware)
      .concat(backgroundApiSlice.middleware), // ✅ Middleware для API фонов
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
