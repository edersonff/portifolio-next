import en from "./en.json";
import ptBr from "./pt-br.json";

const dictionaries = {
  en: () => en,
  "pt-br": () => ptBr,
};

export const getDictionary = (locale: keyof typeof dictionaries) =>
  dictionaries[locale]();
