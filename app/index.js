import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "../context/authContext";

export default function Index() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (typeof isAuthenticated === "undefined") return;
    router.replace(isAuthenticated ? "/home" : "/signIn");
  }, [isAuthenticated, router]);

  return null;
}