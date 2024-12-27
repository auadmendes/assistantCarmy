export interface Message {
    id: number;
    chatId: number;
    content: string;
    role: string; // or you can define an enum if role has fixed values
    timestamp: Date;
  }
  
  export interface Chat {
    id: number;
    userId: string;
    title: string;
    messages: Message[];
  }
  
  export interface SaveNewChatProps {
    userId: string;
    title: string;
    messages: { content: string; role: string }[]; // This assumes you are saving new messages at the time of chat creation
  }

  export interface MessagePair {
    userMessage: {
      id: string;
      content: string;
      
    };
    assistantMessage: {
      id: string;
      content: string;
      
    };
  }

  export interface ChatProps {
    id: number;
    userId: string;
    title: string;
}


export type MessageProps = {
  id: string;
  content: string;
  senderId: string;
  timestamp: Date;
  // Add other relevant properties for your messages
};

export type SidebarChatProps = {
  id: string;
  title: string;
  messages: MessageProps[]; // Include messages as an array of MessageProps
};