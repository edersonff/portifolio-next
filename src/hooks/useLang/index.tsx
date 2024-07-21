import { useSearchParams } from "next/navigation";

type Lang = "pt-br" | "en";

export default function useLang(): Lang {
  const searchParams = useSearchParams();

  return (searchParams.get("l") as Lang) || "pt-br";
}
