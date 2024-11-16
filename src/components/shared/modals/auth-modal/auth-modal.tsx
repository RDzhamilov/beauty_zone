"use client";

import { Button } from "@/components/ui";
import React, { useState } from "react";
import { LoginForm } from "./forms/login-form";
import { RegisterForm } from "./forms/register-form";

// interface Props {
//   onClose: () => void;
// }

export const AuthModal: React.FC = () => {
  const [type, setType] = useState<"login" | "register">("login");

  const handleSwitchToRegister = () => {
    setType("register");
  };

  // Функция для переключения на форму входа
  const handleSwitchToLogin = () => {
    setType("login");
  };

  return (
    <div className="w-[450px] bg-white p-10">
      {/* <LoginForm /> */}

      {type === "login" ? <LoginForm /> : <RegisterForm />}

      <hr />

      <div className="flex justify-between">
        <Button variant="outline" type="button" className="h-12" onClick={handleSwitchToLogin}>
          Login
        </Button>
        <Button variant="outline" type="button" className="h-12" onClick={handleSwitchToRegister}>
          Register
        </Button>
      </div>
    </div>
  );
};
