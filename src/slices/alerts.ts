import {create} from 'zustand';

type Alert = {
  type: 'Success' | 'Error' | 'Warning';
  message: string;
  duration: number;
};

type State = {
  alert: Alert | null;
};

type Actions = {
  showAlert: (alert: Alert) => void;
  removeAlert: () => void;
};

export const useAlerts = create<State & Actions>()(set => ({
  alert: null,
  showAlert: (
    alert: Partial<Pick<Alert, 'duration'>> & Pick<Alert, 'type' | 'message'>,
  ) => {
    set({
      alert: {
        ...alert,
        duration: alert.duration ?? 3000,
      },
    });
  },
  removeAlert: () => {
    set({
      alert: null,
    });
  },
}));

useAlerts.subscribe(state => {
  if (state.alert) {
    setTimeout(() => {
      useAlerts.getState().removeAlert();
    }, state.alert.duration);
  }
});
