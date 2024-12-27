"use server";

import { prisma } from "@/lib/prisma";

export async function createChat({ userId, title, messages }: any) {
  try {
    // Create a new chat
    const response = await prisma.chat.create({
      data: {
        userId: userId,
        title: title,
        messages: JSON.stringify(messages),
      },
    });

    return {
      data: JSON.parse(JSON.stringify(response)),
      success: true,
    };
  } catch (error: any) {
    return {
      message: error.message,
      success: false,
    };
  }
}

export async function updateChat({ chatId, messages }: any) {
  try {
    // Check if the chat exists
    const existingChat = await prisma.chat.findUnique({
      where: { id: chatId },
    });

    if (!existingChat) {
      console.warn(`Chat with ID ${chatId} not found.`);
      return null; // Early return to skip the update if chat doesn't exist
    }

    // Proceed with updating the chat if it exists
    const chat = await prisma.chat.update({
      where: { id: chatId },
      data: {
        messages: JSON.stringify(messages), // Update messages as a JSON string
      },
    });

    return chat;
  } catch (error: any) {
    console.error("Unexpected error in updateChat:", error.message || error);
    throw new Error("Failed to update a chat due to an unexpected error");
  }
}

export async function getChatsByUserId(userId: string) {
  try {
    const response = await prisma.chat.findMany({
      where: { userId: userId },
      // select: {
      //     id: true,
      //     title: true,
      //     userId: true,
      //     messages: true, // This is the JSON string of messages
      //     updatedAt: true, // Include the updatedAt field
      // },
      orderBy: {
        updatedAt: "desc", // Sort by updatedAt in descending order (most recent first)
      },
    });

    return {
      data: JSON.parse(JSON.stringify(response)),
      success: true,
    };
  } catch (error: any) {
    return {
      message: error.message,
      success: false,
    };
  }
}

export async function deleteChat(chatId: string) {
  try {
    // Delete the chat with the given chat ID
    const deletedChat = await prisma.chat.delete({
      where: {
        id: chatId,
      },
    });

    return {
      data: deletedChat,
      success: true,
    };
  } catch (error: any) {
    console.error("Error in deleteChat:", error.message || error);
    throw new Error("Failed to delete chat", error.message);
  }
}

export async function updateChatTitle(chatId: string, newTitle: string) {
  try {
    const updatedChat = await prisma.chat.update({
      where: {
        id: chatId,
      },
      data: {
        title: newTitle,
      },
    });

    return { success: true, data: updatedChat };
  } catch (error) {
    console.error("Error updating chat title:", error);
    return { success: false, error };
  }
}
