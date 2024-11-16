// import { z } from "zod";

// export const passwordSchema = z.string().min(6, { message: "Введите корректный пароль" });

// export const formLoginSchema = z.object({
//   email: z.string().email({ message: "Введите корректный email" }),
//   password: passwordSchema,
// });

// export const formRegisterSchema = formLoginSchema
//   .merge(
//     z.object({
//       firstName: z.string().min(2, { message: "Введите свое имя" }),
//       lastName: z.string().min(2, { message: "Введите свою фамилию" }),
//       confirmPassword: passwordSchema,
//     })
//   )
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Пароли не совпадают",
//     path: ["confirmPassword"],
//   });

// export type TFormLoginValue = z.infer<typeof formLoginSchema>;
// export type TFormRegisterValue = z.infer<typeof formRegisterSchema>;

import { z } from "zod";
import { useTranslation } from "react-i18next";

export const useFormSchemas = () => {
  const { t } = useTranslation();

  const passwordSchema = z.string().min(6, { message: t("validation.password") });

  const formLoginSchema = z.object({
    email: z.string().email({ message: t("validation.email") }),
    password: passwordSchema,
  });

  const formRegisterSchema = formLoginSchema
    .merge(
      z.object({
        firstName: z.string().min(2, { message: t("validation.firstName") }),
        lastName: z.string().min(2, { message: t("validation.lastName") }),
        confirmPassword: passwordSchema,
      })
    )
    .refine((data) => data.password === data.confirmPassword, {
      message: t("validation.confirmPassword"),
      path: ["confirmPassword"],
    });

  return { formLoginSchema, formRegisterSchema, passwordSchema };
};


