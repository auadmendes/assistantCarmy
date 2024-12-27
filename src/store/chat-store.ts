//import { ChatProps, SidebarChatProps } from "@/types/chats";
import { create } from "zustand";

// interface ChatState {
//     selectedChat: ChatProps | null;  // Update this type to include null
//     setSelectedChat: (data: ChatProps) => void;
// }

const chatsGlobalStore = create((set) => ({
    selectedChat: null,
    setSelectedChat: (data: any) => set({ selectedChat: data }),
    userChats: [],
    setUserChats: (data: any) => set({userChats: data})
}));

export default chatsGlobalStore;