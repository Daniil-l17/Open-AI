import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface chatprod {
    role: 'user' | 'AI';
    message: string;
}

interface Store {
    shat: chatprod[];
    message: string;
    addMessage: (title: string) => void;
    addShat: (obj: chatprod) => void;
}

export const useStore = create(
    persist<Store>(
        set => ({
            shat: [],
            message: '',
            addMessage: (title: string) =>
                set(state => ({ message: (state.message = title) })),
            addShat: (obj: chatprod) =>
                set(state => ({ shat: (state.shat = [...state.shat, obj]) })),
        }),
        {
            name: 'chat-storage',
            storage: createJSONStorage(() => localStorage),
        },
    ),
);
