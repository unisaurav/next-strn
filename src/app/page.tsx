"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PasswordCard from "./PasswordCard";
import { useState } from "react";

export default function Home() {
  const [darkMode, toggleDarkMode] = useState(false);

  return (
    <main className="flex justify-center items-center h-screen">
      <PasswordCard />
    </main>
  );
}
