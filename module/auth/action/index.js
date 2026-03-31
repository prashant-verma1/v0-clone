"use server";

import { prisma as db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const onBoardUser = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      return {
        success: false,
        error: "No authenticated user found",
      };
    }
    const { id, firstName, lastName, emailAddresses, imageUrl } = user;

    const newUser = await db.user.upsert({
      where: {
        clerkId: id,
      },
      update: {
        name:
          firstName && lastName
            ? `${firstName} ${lastName}`
            : firstName || lastName || null,
        email: emailAddresses[0]?.emailAddress,
        image: imageUrl,
      },
      create: {
        clerkId: id,
        name:
          firstName && lastName
            ? `${firstName} ${lastName}`
            : firstName || lastName || null,
        email: emailAddresses[0]?.emailAddress,
        image: imageUrl,
      },
    });

    return {
      success: true,
      user: newUser,
      message: "User created successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Failed to create user",
    };
  }
};
export const getCurrentUser = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      return {
        success: false,
        error: "No authenticated user found",
      };
    }
    const dbUser = await db.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        email: true,
        name: true,
        image: true,
        clerkId: true,
      },
    });
    if(!dbUser){
        return {
            success: false,
            error: "Failed to fetch user",
        };
    }
    return {
      success: true,
      user: dbUser,
      message: "User fetched successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Failed to fetch user",
    };
  }
};
