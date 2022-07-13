import { Toast } from 'src/notifications/Toast/types';

export interface ToastStackItem extends Toast {
  id: string;
  unMounting: boolean;
}
