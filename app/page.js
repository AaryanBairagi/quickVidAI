import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-400 text-red-700">
      Hello World
      <UserButton/>

    </div>
  );
}
