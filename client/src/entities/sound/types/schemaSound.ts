import { z } from 'zod';

export const soundSchema = z.object({
  id: z.number(),
  type: z.string(),
  url: z.string(),
  categoryId: z.number(),
  name:z.string().optional()
});
