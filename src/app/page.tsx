"use client"; // ← これを追加

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => router.push("/map")}>Go to Dashboard</button>
    </div>
  );
}
