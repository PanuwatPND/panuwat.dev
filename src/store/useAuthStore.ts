import { create } from 'zustand';

type AuthState = {
    isLoggingIn: boolean;
    setLoggingIn: (status: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isLoggingIn: false,
    setLoggingIn: (status: boolean) => set({isLoggingIn: status}),
}));    