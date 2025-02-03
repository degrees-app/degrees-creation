import { z } from 'zod';
import { ballSchema } from './schemaBoll';

export type BallType = z.infer<typeof ballSchema>;
