import { configureStore } from '@reduxjs/toolkit'
import bollReducer from '../entities/boll/model/bollSlice'
import interfaceReducer from '../entities/interface/model/interfaceSlice'
import backroundReducer from '../entities/backround/model/backroundSlice'
import soundReducer from '../entities/sound/model/soundSlice'

export const store = configureStore({
  reducer: {
    boll: bollReducer,
    interface: interfaceReducer,
    backround: backroundReducer,
    sound: soundReducer
  },
})

// Извлекаем тип состояния приложения
export type RootState = ReturnType<typeof store.getState>
// Тип состояния для всех редьюсеров в хранилище

// Тип диспетчера для отправки действий
export type AppDispatch = typeof store.dispatch
