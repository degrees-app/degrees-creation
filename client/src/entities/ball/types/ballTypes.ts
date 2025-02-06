import { z } from 'zod';

export const BallObjectSchema = z.object({
  id: z.number(),
  width: z.number(),
  color: z.number(),
  shape: z.string(),
  opacity: z.number(),
  author: z.string(),
});

export const ParamsObjectSchema = z.object({
  'width (px)': z.number(),
  color: z.number(),
  shape: z.string(),
  opacity: z.number(),
  author: z.string(),
});

export const BallSchema = z.array(BallObjectSchema);

export type ParamsObjectType = z.infer<typeof ParamsObjectSchema>;
export type BallObjectType = z.infer<typeof BallObjectSchema>;
export type BallArrayType = z.infer<typeof BallSchema>;
