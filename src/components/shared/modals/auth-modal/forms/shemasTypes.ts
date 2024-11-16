import { useFormSchemas } from "./schemas";
import { z } from "zod";

export type TFormLoginValue = z.infer<ReturnType<typeof useFormSchemas>["formLoginSchema"]>;
export type TFormRegisterValue = z.infer<ReturnType<typeof useFormSchemas>["formRegisterSchema"]>;
