import { create } from "zustand";

export type Alert = {
  message: string;
  status: number;
};

export type AlertStore = {
  alerts: Alert[];
  pushAlert: (alert: Alert) => void;
  popAlert: (alert: Alert) => void;
};

export const useAlertStore = create<AlertStore>((set) => ({
  alerts: [],
  pushAlert: (alert) => {
    set((state) => ({
      alerts: [...state.alerts, alert],
    }));
    setTimeout(() => {
      set((state) => ({
        alerts: state.alerts.filter((e) => e !== alert),
      }));
    }, 5000);
  },
  popAlert: ({ message, status }) => {
    set((state) => ({
      alerts: state.alerts.filter(
        (e) => e.message !== message && e.status !== status
      ),
    }));
  },
}));
