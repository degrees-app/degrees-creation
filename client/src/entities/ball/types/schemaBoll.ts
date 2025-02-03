import { z } from 'zod';

export const ballSchema = z.object({
  id: z.number(),
  type: z.string(),
});
