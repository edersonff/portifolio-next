import useLang from "../useLang";
import { getDictionary } from "../../dictionaries/dictionaries";

export default function useDictionary() {
  const lang = useLang();

  return getDictionary(lang as keyof typeof getDictionary);
}
