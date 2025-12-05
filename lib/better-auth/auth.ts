import { betterAuth } from "better-auth";
import { MongoDBAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { connectToDatabase } from "@/database/mongoose";
import {nextCookies} from "better-auth/next-js";

let authInstance: ReturnType<typeof betterAuth> | null = null;

export const getAuth = async () =>{
    if(authInstance) return authInstance;   
    const mongoose = await connectToDatabase();
    if (!mongoose) throw new Error("Failed to connect to database");
    const db = mongoose.connection.db;
    if(!db) throw new Error("Database connection is not available");

    authInstance = betterAuth({
        adapter: MongoDBAdapter(db),
        secret: process.env.BETTER_AUTH_SECRET || "default_secret",
        cookies: nextCookies(),
        baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
        emailAndPassword: {
            enabled: true,
            disableSignUp: false,
            requireEmailVerification: false,
            minPasswordLength: 6,
            maxPasswordLength: 128,
            autoSignIn: true,
        },
        plugins: [nextCookies()],
    });
    return authInstance;
}

export const auth = await getAuth()