import { useSearchParams } from "next/navigation";

export default function useLang() {
  const searchParams = useSearchParams();

  return searchParams.get("l") || "pt-br";
}
