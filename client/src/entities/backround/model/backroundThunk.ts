import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { BackroundState } from "../types/backroundTypes";

const API_URL = "http://localhost:5000/api/backround";

// Получение данных из БД
export const fetchBackgroundData = createAsyncThunk(
  "backround/fetchBackgroundData",
  async () => {
    const response = await fetch(API_URL);
    return await response.json();
  }
);

// Сохранение данных в БД
export const saveBackgroundData = createAsyncThunk<
  void,
  BackroundState,
  { state: RootState }
>("backround/saveBackgroundData", async (data) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
});

