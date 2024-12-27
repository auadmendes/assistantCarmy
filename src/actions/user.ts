"use server";

import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { SaveUserResponse } from "@/types/response";

export const saveAndGetCurrentUser = async (): Promise<SaveUserResponse> => {
    try {
        const user = await currentUser();

        if (!user) {
            return {
                success: false,
                message: "You are not logged not logged.",
            };
        }

        const email = user.emailAddresses[0]?.emailAddress;

        if (!email) {
            return {
                success: false,
                message: "User email not found.",
            };
        }

        let userInDB = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });

        if (!userInDB) {
            userInDB = await prisma.user.create({
                data: {
                    name: user.fullName || "Unnamed User",
                    email: email,
                    clerkUserId: user.id,
                },
            });
        }

        return {
            success: true,
            data: userInDB,
        };
    } catch (error: any) {
        console.error("Error Saving User: ", error);
        return {
            success: false,
            message: error.message || "An unexpected error occurred while saving the user.",
        };
    }
};
