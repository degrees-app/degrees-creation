import { createAsyncThunk } from '@reduxjs/toolkit';
import { BackgroundState } from '../types/backgroundTypes';

export const fetchBackground = createAsyncThunk<BackgroundState>(
  'backgrounds/fetch',
  async () => {
    const response = await fetch('/api/backgrounds/get');
    return response.json();
  },
);

export const saveBackground = createAsyncThunk(
  'backgrounds/save',
  async (backgroundData: BackgroundState) => {
    const formData = new FormData();
    if (backgroundData.backgroundImage) {
      formData.append('file', backgroundData.backgroundImage);
    }
    formData.append('backgroundColor', backgroundData.backgroundColor);
    formData.append('brightness', backgroundData.brightness.toString());
    formData.append('contrast', backgroundData.contrast.toString());

    await fetch('/api/backgrounds/save', {
      method: 'POST',
      body: formData,
    });
  },
);
