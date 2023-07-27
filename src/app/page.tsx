import { Button } from "@/components/ui/button";
import Image from "next/image";
import PasswordCard from "./PasswordCard";

export default function Home() {

  return (
    <main className="flex justify-center items-center h-screen">
      <PasswordCard />
    </main>
  );
}
