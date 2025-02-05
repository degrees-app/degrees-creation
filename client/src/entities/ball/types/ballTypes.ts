import { z } from 'zod';

export const BallObjectSchema = z.object({
  id: z.number(),
  lineType: z.number(),
  width: z.number(),
  dashed: z.boolean(),
  color: z.number(),
  dashScale: z.number(),
  dashGap:z.number(),
  shape:z.string()
});

export const BallSchema = z.array(BallObjectSchema)

export type BallObjectType = z.infer<typeof BallObjectSchema>;
export type BallArrayType = z.infer<typeof BallSchema>;
