"use client";

import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { Title } from "./title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks";

interface Props {
  title: string;
  text: string;
  className?: string;
}

export const InfoBlock: React.FC<Props> = ({ className, title, text }) => {
  const { isAuthenticated } = useAuth();

  return (
    <div className={cn(className, "flex items-center justify-between w-[480px] gap-12")}>
      <div className="flex flex-col">
        <div className="w-[445px]">
          <Title size="lg" text={title} className="font-extrabold" />
          <p className="text-gray-400 text-lg">{text}</p>
        </div>

        <Link href={isAuthenticated ? "/auth" : "/"} className="flex gap-5 mt-5">
          <Button variant="outline" className="gap-2">
            <ArrowLeft />
            {isAuthenticated ? "Войти в аккаунт" : "На главную"}
          </Button>
        </Link>
      </div>
    </div>
  );
};
