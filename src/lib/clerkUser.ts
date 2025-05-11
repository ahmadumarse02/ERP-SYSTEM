import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function GET() {
    try {
        const clerkUser = await currentUser();

        if (!clerkUser) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const existingUser = await prisma.user.findUnique({
            where: { id: clerkUser.id }
        });

        if (!existingUser) {
            const newUser = await prisma.user.create({
                data: {
                    id: clerkUser.id,
                    email: clerkUser.emailAddresses[0].emailAddress,
                    firstName: clerkUser.firstName as string,
                    lastName: clerkUser.lastName as string,
                    profileImage: clerkUser.imageUrl,
                },
            });
            return NextResponse.json(newUser, { status: 201 });
        }

        return NextResponse.json(existingUser);
    } catch (error) {
        console.error("Error in user route:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}