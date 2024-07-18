import Image from "next/image";

import { useRouter } from "next/router";

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");

  return null;
}
