import { z } from 'zod';
import { ballSchema } from './schemaBall';

export type BallType = z.infer<typeof ballSchema>;
