import { z } from "zod";
import { soundSchema } from "./schemaSound";


export type SoundType = z.infer<typeof soundSchema>