import { create } from "zustand";

interface IErrorModalState {
	isError: boolean;
	showError: () => void;
	closeError: () => void;
}

export const useErrorModalStore = create<IErrorModalState>((set) => ({
	isError: false,

	showError() {
		set({ isError: true });
	},

	closeError() {
		set({ isError: false });
	},
}));
