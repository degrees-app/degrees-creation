import { z } from "zod";
import { skinSchema } from "./shema";

export type SkinType = z.infer<typeof skinSchema>