import { z } from "zod";
import { useTranslation } from "react-i18next";

export const useFormSchemas = () => {
  const { t } = useTranslation();

  const passwordSchema = z.string().min(6, { message: t("validation.password") });

  const formLoginSchema = z.object({
    email: z.string().email({ message: t("validation.email") }),
    password: passwordSchema,
  });

  const formRegisterSchema = formLoginSchema.merge(
    z.object({
      firstName: z.string().min(2, { message: t("validation.firstName") }),
      lastName: z.string().min(2, { message: t("validation.lastName") }),
      password: passwordSchema,
    })
  );

  return { formLoginSchema, formRegisterSchema, passwordSchema };
};
