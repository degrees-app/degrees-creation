import { z } from 'zod';

export const soundSchema = z.object({
  id: z.number(),
  type: z.string(),
});
