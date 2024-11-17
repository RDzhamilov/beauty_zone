"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TFormRegisterValue } from "./shemasTypes";
import { useFormSchemas } from "./schemas";
import { FormInput } from "../../../form";
import { Button } from "@/components/ui";
import { ErrorCustomToast, SuccessCustomToast } from "@/lib/toastService";

export const RegisterForm: React.FC = () => {
  const { formRegisterSchema } = useFormSchemas();

  const form = useForm<TFormRegisterValue>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
  });

  const onSubmit = async (data: TFormRegisterValue) => {
    try {
      const response = await fetch("http://localhost:8080/api/Auth/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.text();

      if (result === "User has been created.") {
        SuccessCustomToast({
          message: "Registration successful 📝. Please confirm your email",
        });
      }

      setTimeout(() => {
        location.href = "/home";
      }, 3000);
    } catch (error) {
      return ErrorCustomToast({ message: "Incorrect E-Mail or password" });
    }
  };

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
        <FormInput name="email" label="E-Mail" required />
        <FormInput name="firstName" label="First name" required />
        <FormInput name="lastName" label="Last name" required />
        <FormInput name="password" label="Password" type="password" required />

        <Button loading={form.formState.isSubmitting} className="h-12 text-base" type="submit">
          Sign up
        </Button>
      </form>
    </FormProvider>
  );
};
