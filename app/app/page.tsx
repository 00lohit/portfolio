"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    router.replace("turtil-nri://" + params);
  }, []);

  return <main></main>;
}
