import {BallObjectSchema, BallObjectType, BallSchema } from '../types/ballTypes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../shared/api/axiosInstance';

export const fetchBallCards = createAsyncThunk(
  'ball/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/balls')
      return BallSchema.parse(data);
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Что-то пошло не так',
      );
    }
  },
);

export const CreateBallCard = createAsyncThunk(
    'ball/createBallCard',
    async (formData:BallObjectType, { rejectWithValue }) => {
      try {
        const { data } = await axiosInstance.post('/balls',formData)
        console.log(BallSchema.parse(data))
        return BallSchema.parse(data);
      } catch (error) {
        return rejectWithValue(
          error instanceof Error ? error.message : 'Что-то пошло не так',
        );
      }
    },
  );

export const FindOneBall = createAsyncThunk(
    'ball/findOneBall',
    async (id:string, { rejectWithValue }) => {
      try {
        const {data} = await axiosInstance.get(`/balls/${Number(id)}`)
        return BallObjectSchema.parse(data);
      } catch (error) {
        return rejectWithValue(
          error instanceof Error ? error.message : 'Что-то пошло не так',
        );
      }
    },
  );
