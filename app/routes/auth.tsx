import type { Route } from "./+types/auth";
import AuthPage from "~/Components/AuthPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sign Up or Login" },
    { name: "description", content: "Create an account or login" },
  ];
}

export default function Auth() {
  return <AuthPage />;
}