// src/actions/watchlist.actions.ts
// (separate file for watchlist logic – keeps things organized)

"use server";

import { connectToDatabase } from "@/database/mongoose";
import { Watchlist } from "@/database/models/watchlist.model";
import { getAuth } from "@/lib/better-auth/auth";
import { cookies, headers } from "next/headers";

export async function getWatchlistSymbolsByEmail(email: string): Promise<string[]> {
  try {
    await connectToDatabase();
    const auth = await getAuth();

    // Await headers and cookies
    const h = await headers(); // ReadonlyHeaders
    const c = await cookies(); // ReadonlyRequestCookies

    const sessionToken = c.get("better-auth.session_token")?.value ?? "";

    // Build mutable Headers instance
    const headersForAuth = new Headers();
    h.forEach((value, key) => headersForAuth.set(key, value));

    if (sessionToken) {
      const existing = headersForAuth.get("cookie") || "";
      const cookieHeader = existing
        ? `${existing}; better-auth.session_token=${sessionToken}`
        : `better-auth.session_token=${sessionToken}`;
      headersForAuth.set("cookie", cookieHeader);
    }

    const session = await auth.api.getSession({
      headers: headersForAuth,
    });

    let userId: string | null = session?.user?.id ?? null;

    // Fallback: direct DB lookup by email if no session
    if (!userId) {
      const conn = await connectToDatabase();
      if (!conn?.connection?.db) return [];

      const user = await conn.connection.db.collection("user").findOne({ email });
      if (!user) return [];
      userId = user.id as string;
    }

    const watchlistItems = await Watchlist.find({ userId })
      .select("symbol")
      .lean();

    return watchlistItems.map((item) => item.symbol as string);
  } catch (error) {
    console.error("Error fetching watchlist symbols:", error);
    return [];
  }
};