import { create } from "zustand";
import { UserType } from "@/types/user";

interface UsersStore {
    loggedInUserData: UserType | null;
    setLoggedInUserData: (user: UserType) => void;
}

const useUsersStore = create<UsersStore>((set) => ({
    loggedInUserData: null,
    setLoggedInUserData: (user) => set({ loggedInUserData: user }),
}));

export default useUsersStore;