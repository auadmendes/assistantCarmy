import { useEffect, useRef, useState } from "react";
import { useChat } from "ai/react";

import { useQuestionStore } from "@/store/home-question-store";
import usersGlobalStore from "@/store/users-store";


import chatsGlobalStore from "@/store/chat-store";
import { createChat, updateChat } from "@/actions/chat";
import { Menu, Plus } from "lucide-react";
import { Drawer, message } from "antd";
import { Sidebar } from "./sidebar";
import { Messages } from "./messages";

import ActionArrowUpIcon from "@/assets/action-arrow-up-icon";

export function ChatArea() {
  const { question, setQuestion } = useQuestionStore();


  const textAreaInput = useRef<HTMLTextAreaElement | null>(null);
  const [isLoadingMessages, setIsLoadingMessages] = useState<boolean>(false);

  const [showSidebar, setShowSidebar] = useState(false);
  const { loggedInUserData }: any = usersGlobalStore();
  const { selectedChat, setSelectedChat, setUserChats, userChats } =
    chatsGlobalStore() as any;
  const [chats, setChats] = useState<any[]>([]);


  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setMessages,
  } = useChat({
    api: "api/chat",
    initialMessages: [],
  });

  const adjustTextareaHeight = () => {
    const el = textAreaInput.current;
    const maxHeight = 300; // Set a maximum height in pixels

    if (el) {
      el.style.height = "auto"; // Reset height to get actual scroll height
      el.style.height = Math.min(el.scrollHeight, maxHeight) + "px"; // Set height with max limit
    }
  };

  useEffect(() => {
    adjustTextareaHeight(); // Adjust height on input change
  }, [input]);

  useEffect(() => {
    //Retrieving the message from home
    if (question && handleInputChange) {
      if (selectedChat !== null) {
        setSelectedChat(null); // Only update if `selectedChat` is not already null
      }
      handleInputChange({
        target: { value: question },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    }
  }, [question, handleInputChange]);

  const handleSubmitAndClearParams = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission

    handleSubmit();

    // Clear the input field after submission
    if (handleInputChange) {
      handleInputChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    }
    setQuestion(""); // cleaning the question state
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); 

      handleSubmitAndClearParams(
        new Event("submit") as unknown as React.FormEvent
      );
    }
  };

  const handleCreateOrUpdateChat = async () => {
    try {
      const userId = loggedInUserData.id;

      setIsLoadingMessages(true); // Set loading state to true before starting the API call

      if (!selectedChat) {
        // Create chat if no selected chat
        if (messages.length > 0) {
          const messageTitle = messages[0].content;

          const response = await createChat({
            userId,
            title: messageTitle,
            messages,
          });

          if (response.success) {
            setSelectedChat(response.data);
          } else {
            message.error("Failed to create chat");
          }
        }
      } else {
        // Update the existing chat
        if (messages.length > 0) {
          const updatedChatResponse = await updateChat({
            chatId: selectedChat.id,
            messages,
          });

          if (updatedChatResponse?.id) {
            //message.success('Chat updated successfully');
          } else {
            message.error("Failed to update chat");
          }
        }
      }
    } catch (error) {
      message.error("An error occurred while handling the chat");
      console.error("Error: ", error);
    } finally {
      setIsLoadingMessages(false); // Ensure loading state is set to false after the operation completes
    }
  };

  useEffect(() => {
    if (selectedChat) {
      let parsedMessages = [];
      try {
        parsedMessages = JSON.parse(selectedChat.messages); // Parse the string into an array
        setQuestion("");
      } catch (error) {
        console.error("Failed to parse messages: ", error);
      }
      setMessages(parsedMessages);
    } else {
      setMessages([]);
    }
  }, [selectedChat]);

  useEffect(() => {
    handleCreateOrUpdateChat();
  }, [messages]);

  useEffect(() => {
    if (selectedChat) {
      let parsedMessages = [];
      try {
        parsedMessages = JSON.parse(selectedChat.messages); // Parse the string into an array
      } catch (error) {
        console.error("Failed to parse messages: ", error);
      }
      setMessages(parsedMessages);
    } else {
      setMessages([]);
    }
  }, [selectedChat]);

  const handleDeleteMessage = async (chatId: string) => {};

  return (
    // Changing the Width here to full can cover all the screen // max-w-full
    <div className="flex flex-col w-full rounded-xl h-full lg:p-2.5">
      {/* Hidden menu and new chat button */}
      <div className="flex justify-between mb-4 ">
        <div className="flex items-center gap-2">
          <Menu
            className="flex lg:hidden text-text cursor-pointer"
            onClick={() => setShowSidebar(true)}
          />
          <div
            className="flex items-center gap-1 border border-primary border-solid bg-white text-text3 font-bold py-1.5 px-3 pl-1 rounded-xl w-max text-xs cursor-pointer hover:border-accent hover:bg-card transition-all"
            onClick={() => {
              setSelectedChat(null);
              if (setShowSidebar) setShowSidebar(false);
            }}
          >
            <Plus size={20} className="text-plusicon" />
            New chat
          </div>
        </div>
      </div>

      {/* Dividing line */}
      <div className="border-t-2 border-border2 my-2"></div>

      <div className="flex flex-col h-full overflow-hidden">
        <Messages messages={messages} isLoading={isLoading} />

        <form
          onSubmit={handleSubmitAndClearParams}
          className="relative flex justify-end"
        >
          <div className="border-t-2 border-border2 my-2"></div>

          <div
            className="flex justify-between gap-2 p-5 focus:outline-none 
            focus:border-carmy focus:border text-black rounded-xl placeholder:text-text/30 
            box-border border border-primary focus:ring-0 mt-4 w-full bg-white"
          >
            <textarea
              name="prompt"
              value={input}
              // onChange={() => {
              //   handleInputChange;
              //   adjustTextareaHeight(); // Adjust height when content changes
              // }}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              ref={textAreaInput}
              placeholder="Tell us your car problem, and we will provide you with expert advice!"
              className="w-full border-none outline-none overflow-auto resize-none placeholder:text-xs lg:placeholder:text-sm"
              style={{ height: "auto", minHeight: "2.5em" }} // Sets a min-height to keep it at least one line high
            />

            <button type="submit">
              <ActionArrowUpIcon />
            </button>
          </div>
        </form>
      </div>

      {showSidebar && (
        <div className="w-full h-full">
          <Drawer
            onClose={() => setShowSidebar(false)}
            open={showSidebar}
            placement="left"
            //styles={{ content: { height: '50vh' } }}
          >
            <Sidebar setShowSidebar={setShowSidebar} />
          </Drawer>
        </div>
      )}
    </div>
  );
}
