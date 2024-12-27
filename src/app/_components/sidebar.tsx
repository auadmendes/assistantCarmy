import { useEffect, useState } from "react";
import useUsersStore from "@/store/users-store";

import { Trash2 } from "lucide-react";
import { deleteChat, getChatsByUserId } from "@/actions/chat";
import chatsGlobalStore from "@/store/chat-store";
import { SidebarChatProps } from "@/types/chats";
import classNames from "classnames";
import { message, Spin } from "antd";


import MessageIcon from "@/assets/message-icon";
import SearchIcon from "@/assets/search-icon";
import { Chat } from "@prisma/client";

interface SidebarProps {
  setShowSidebar?: (value: boolean) => void;
}

interface SelectedChatForDeleteProps {
  chatId: string | null;
}

export function Sidebar({ setShowSidebar }: SidebarProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const { loggedInUserData } = useUsersStore();

  const { selectedChat, setSelectedChat, setUserChats, userChats } =
    chatsGlobalStore() as any;

  const [selectedChatForDelete, setSelectedChatForDelete] =
    useState<SelectedChatForDeleteProps>({ chatId: null });

  const [hoveredChatId, setHoveredChatId] = useState<string>("");

  const [searchQuery, setSearchQuery] = useState("");

  // Fetch the chats and set the last chat as the selected one
  async function getChats() {
    try {
      setLoading(true);

      if (loggedInUserData) {
        const response = await getChatsByUserId(loggedInUserData.id);

        if (response.success && response.data.length > 0) {
          setUserChats(response.data);
          //setSelectedChat(null)
        } else {
          setUserChats(null);
          setSelectedChat(null);
          //message.error(response.message)
        }
      } else {
        console.log("No user data found");
      }
    } catch (error) {
      console.log("Failed to fetch chats", error);
    } finally {
      setLoading(false);
    }
  }

  //Search filter function
  const filteredChats = userChats?.filter((chat: Chat) =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    getChats();
  }, []);

  // Delete a chat by its ID
  async function handleDeleteChat(chatId: string) {
    try {
      setSelectedChatForDelete({ chatId });

      const response = await deleteChat(chatId);

      if (response.success) {
        // Remove deleted chat from list
        if (userChats.length > 1) {
          console.log(
            "User chats Tamanho ------ : ",
            userChats.length,
            "  O que tem dentro: ",
            userChats
          );
          const updatedChats = userChats.filter(
            (chat: SidebarChatProps) => chat.id !== chatId
          );
          setUserChats(updatedChats); // Update the state with the new chat list
          if (updatedChats.length > 1) {
            setSelectedChat(updatedChats[0]);
          } else {
            setSelectedChat(null);
            setSelectedChatForDelete({ chatId: null });
            setSelectedChat(null);
          }
        } else {
          // No chats remaining
          console.log(
            "User chats Length DENTRO DO ELSE: ",
            userChats.length,
            "  O que tem dentro: ",
            userChats
          );
          setUserChats(null);
          setSelectedChatForDelete({ chatId: null });
          setSelectedChat(null);
        }

        // Clear the deleted chat selection
        //setSelectedChatForDelete({ chatId: null });

        message.success("Chat deleted");
      } else {
        alert("opa, legal heim");
      }
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setSelectedChatForDelete({ chatId: null });
    }
  }

  // Load chats only once when component mounts
  useEffect(() => {
    getChats();
  }, [selectedChat]); // Empty dependency array to call this only once

  return (
    <div
      className="max-w-full w-80 bg-primary p-3 flex flex-col lg:h-auto 
    rounded-l-xl min-h-full overflow-hidden"
    >
      <div className="p-2 flex  justify-between">
        <div className="flex p-5 bg-white gap-2 w-full rounded">
          <MessageIcon />
          <span className="text-black font-bold">Chats</span>
        </div>
      </div>

      {/* search icon */}
      <div className=" flex items-center p-3 ml-4">
        <SearchIcon />
        <input
          className=" text-text focus:outline-none focus:ring-accent border border-transparent rounded-lg px-2 py-1 bg-transparent"
          placeholder="Search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>

      {/* Chat container that occupies all free space */}
      <div className="flex flex-col mt-7 flex-1 overflow-y-auto  h-[50vh] overflow-auto">
        <h1 className="text-sm text-text mt-7 font-bold p-2">
          Your recent chats.....
        </h1>

        <div className="flex flex-col gap-2 p-2 scroll-auto max-h-full overflow-auto">
          {loading ? (
            <Spin size="small" className="text-carmy" />
          ) : (
            <div className="flex flex-col gap-3 min-h-full">
              {filteredChats?.length > 0 ? (
                <ul>
                  {filteredChats.map((chat: SidebarChatProps) => (
                    <li
                      key={chat.id}
                      className={classNames(
                        "cursor-pointer flex justify-between items-center p-2 hover:bg-text2/50 hover:rounded transition-all",
                        {
                          "bg-text2/40 bg-gray-300 rounded":
                            selectedChat?.id === chat.id,
                        }
                      )}
                      onMouseEnter={() => setHoveredChatId(chat.id)}
                      onMouseLeave={() => setHoveredChatId("")}
                      onClick={() => setSelectedChat(chat)}
                    >
                      <span
                        className={`text-sm text-text h-6 cursor-pointer ${
                          chat.id === selectedChat?.id ? "font-bold" : ""
                        }`}
                      >
                        {chat.title.substring(0, 30)}
                      </span>
                      {(selectedChat?.id === chat.id ||
                        hoveredChatId === chat.id) && (
                        <Trash2
                          onClick={() => handleDeleteChat(chat.id)}
                          size={15}
                          className="text-text hover:text-text/50 transition-all"
                        />
                      )}
                      {String(selectedChatForDelete) === chat.id && (
                        <Spin size="small" className="text-card" />
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-text mt-8 text-xs ">
                  You have no chats yet.
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
