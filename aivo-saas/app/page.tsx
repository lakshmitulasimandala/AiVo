// app/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard"); // Already logged in? Go to dashboard
  }

  redirect("/landing"); // Not logged in? Go to login
}
