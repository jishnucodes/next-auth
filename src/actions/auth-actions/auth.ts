import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";


export interface RegisterData {
    fullName: string;
    email: string;
    password: string;
}


export const AuthActions = {
    
    register: async (data: RegisterData) => {
        try {
            const { fullName, email, password } = data;
            
            const existingUser = await prisma.user.findUnique({ where: { email } });

            if (existingUser) {
                return {
                    success: false,
                    error: "User already exists",
                    status: 400
                };
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            
            // Use transaction to ensure both operations succeed or fail together
            const result = await prisma.$transaction(async (tx) => {
                // Create the user first
                const newUser = await tx.user.create({
                    data: {
                        fullName,
                        email,
                        hashedPassword,
                    }
                });

                // Update with the generated ID
                const updatedUser = await tx.user.update({
                    where: { id: newUser.id },
                    data: {
                        createdBy: newUser.id,
                        modifiedBy: newUser.id,
                    }
                });

                return updatedUser;
            });

            return {
                success: true,
                data: {
                    id: result.id,
                    email: result.email,
                    fullName: result.fullName
                },
                status: 201
            };
        } catch (error) {
            console.error('Error in register action:', error);
            return {
                success: false,
                error: "Internal server error",
                status: 500
            };
        }
    },
}