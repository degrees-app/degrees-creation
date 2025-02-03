import { z } from 'zod';

export const skinSchema = z.object({
  id: z.number(),
  title: z.string(),
});
