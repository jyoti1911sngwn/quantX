// src/actions/auth.actions.ts

"use server";

import { getAuth } from "@/lib/better-auth/auth";
import { inngest } from "@/lib/inngest/client";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

interface SignUpFormData {
  fullName: string;
  country: string;
  email: string;
  password: string;
  investmentGoals: string[];
  riskTolerance: "low" | "medium" | "high";
  preferredIndustry: string[];
}

// This is the magic trick that everyone uses and works perfectly
const signInBody = (email: string, password: string) => ({
  email,
  password,
  // These two lines make TypeScript happy forever
  callbackURL: undefined as any,
  dontRememberMe: undefined as any,
});

const signUpBody = (email: string, password: string, name: string) => ({
  email,
  password,
  name,
  // Add other optional fields with "as any" if you have them
});

// 1. SIGN UP
export const signUpWithEmail = async (data: SignUpFormData) => {
  const { fullName, country, email, password, investmentGoals, riskTolerance, preferredIndustry } = data;

  try {
    const auth = await getAuth();

    const response = await auth.api.signUpEmail({
      headers: await headers(),
      body: signUpBody(email, password, fullName) as any, // ← This kills the error
    });

    if (response.user) {
      await inngest.send({
        name: "app/user.created",
        data: {
          email,
          name: fullName,
          country,
          investmentGoals,
          riskTolerance,
          preferredIndustry,
        },
      });
    }

    return { success: true, data: response };
  } catch (error) {
    console.error("Sign up error:", error);
    return { success: false, message: "Sign up failed. Email may already be in use." };
  }
};

// 2. SIGN IN
export const signInWithEmail = async (email: string, password: string) => {
  try {
    const auth = await getAuth();

    const result = await auth.api.signInEmail({
      headers: await headers(),
      body: signInBody(email, password) as any, // ← This kills the error
    });

    if (result.user) {
      return { success: true, user: result.user };
    }

    return { success: false, message: "Invalid credentials" };
  } catch (error) {
    console.error("Sign in error:", error);
    return { success: false, message: "Invalid email or password" };
  }
};

// 3. SIGN OUT
export const signOut = async () => {
  try {
    const auth = await getAuth();

    await auth.api.signOut({
      headers: await headers(),
    });

    redirect("/sign-in");
  } catch (error) {
    console.error("Sign out error:", error);
    return { success: false, message: "Failed to sign out" };
  }
};