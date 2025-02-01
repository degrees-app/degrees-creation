import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

const fetchInitialTextFromServer = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Загруженный текст из API");
    }, 1000);
  });
};

export const fetchInitialText = createAsyncThunk<string, void, { state: RootState }>(
  "backround/fetchInitialText",
  async () => {
    const response = await fetchInitialTextFromServer();
    return response;
  }
);
