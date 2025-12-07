import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { connectToDatabase } from "@/database/mongoose";

let authInstance: ReturnType<typeof betterAuth> | null = null;

export const getAuth = async () => {
  if (authInstance) return authInstance;

  const mongoose = await connectToDatabase();
  if (!mongoose) throw new Error("Failed to connect to database");

  const db = mongoose.connection.db;
  if (!db) throw new Error("Database connection is not available");

  authInstance = betterAuth({
    database: mongodbAdapter(db),
    secret: process.env.BETTER_AUTH_SECRET || "default_secret",
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    emailAndPassword: {
      enabled: true,
      minPasswordLength: 6,
      maxPasswordLength: 128,
    },
    // plugins: []  // only add plugins if your version supports them
  });

  return authInstance;
};

// Export the initialized auth instance
export const auth = await getAuth();
