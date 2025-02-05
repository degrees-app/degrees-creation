import { z } from 'zod';
import { categorySchema } from './categoryShema';

export type CategoryType = z.infer<typeof categorySchema>;
