"use client";

import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import { AuthProvider } from "../../hooks/AuthContext";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <AuthProvider>
        <I18nextProvider i18n={i18n}>
          {children}
          <Toaster />
        </I18nextProvider>
      </AuthProvider>
    </>
  );
};
