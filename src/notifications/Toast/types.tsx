import { NOTIFICATION_VARIANTS } from 'src/notifications/Notification';

export interface Toast {
  variant: keyof typeof NOTIFICATION_VARIANTS;
  title: React.ReactNode;
  content: React.ReactNode;
  onInteraction?: any;
  interactionType?: any;
}
