import React from "react";
import { TFormLoginValue } from "./shemasTypes";
import { useFormSchemas } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { FormProvider, useForm } from "react-hook-form";
import { ErrorCustomToast, SuccessCustomToast } from "@/lib/toastService";
import { Title } from "@/components/shared";
import { FormInput } from "@/components/shared/form";
import { Button } from "@/components/ui";

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const { formLoginSchema } = useFormSchemas();

  const form = useForm<TFormLoginValue>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TFormLoginValue) => {
    try {
      const resp = await fetch("http://localhost:8080/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await resp.json();

      if (!resp?.ok) {
        throw Error(result?.message || "Unknown error");
      }

      SuccessCustomToast({ message: t("messageToast.login-form.success") });
    } catch (error) {
      console.error("Error [LOGIN]", error);
      ErrorCustomToast({ message: t("messageToast.login-form.error") });
    }
  };

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <Title text={t("login-from.title")} size="md" className="font-bold" />
            <p className="text-gray-400">{t("login-from.p")}</p>
          </div>
        </div>

        <FormInput name="email" label="E-mail" required />
        <FormInput name="password" label={t("login-from.password")} type="password" required />

        <Button loading={form.formState.isSubmitting} className="h-12 text-base" type="submit">
          {t("login-from.logIn")}
        </Button>
      </form>
    </FormProvider>
  );
};
