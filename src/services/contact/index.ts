import api from "../api";
import { ContactForm } from "./types";

export const contactService = {
  send: async (contact: ContactForm) =>
    await api.post<string>("/contact", contact),
};
