import { toast } from 'sonner';

export { toast };

export type ToastProps = {
  title?: string;
  description?: string;
  duration?: number;
};

export function useToast() {
  return {
    toast: {
      success: (title: string, props?: ToastProps) => {
        toast.success(title, props);
      },
      error: (title: string, props?: ToastProps) => {
        toast.error(title, props);
      },
      info: (title: string, props?: ToastProps) => {
        toast.info(title, props);
      },
      warning: (title: string, props?: ToastProps) => {
        toast.warning(title, props);
      },
    },
  };
}