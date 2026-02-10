import { db } from "@/db";
import { users } from "@/db/schema";
import { Account, Profile, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

// Log environment for debugging
console.log("🔐 Auth Config - NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
console.log("🔐 Auth Config - NODE_ENV:", process.env.NODE_ENV);

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/api/auth/error",
  },
  callbacks: {
    async jwt({
      token,
      account,
      profile,
    }: {
      token: JWT;
      account?: Account | null;
      profile?: Profile | null;
    }) {
      if (account && profile) {
        token.googleId = profile.sub;
        token.email = profile.email;
        console.log("🔐 JWT Callback - Profile email:", profile.email);
        try {
          const existing = await db.query.users.findFirst({
            where: (u, { eq }) => eq(u.email, profile.email!),
          });
          if (existing) {
            console.log("✅ User found in DB:", existing.email);
            token.role = existing.role;
            token.id = existing.id;
          } else {
            console.log("ℹ️ User not found in DB yet (will be created in signIn)");
          }
        } catch (error) {
          // Database unavailable - continue without DB data
          console.warn("⚠️ Database unavailable during JWT callback:", error);
        }
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      console.log("🔄 Session callback - Token:", token);
      
      if (session.user) {
        if (token.email) {
          session.user.email = token.email as string;
        }
        if (token.googleId) {
          session.user = {
            ...session.user,
            googleId: token.googleId as string,
          };
        }
        if (token.role) {
          session.user.role = token.role as string;
        }
        if (token.id) {
          session.user.id = token.id as number;
        }
      }
      
      console.log("✅ Session updated:", session.user?.email);
      return session;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async signIn({ user }: { user: any }) {
      if (!user.email) {
        console.error("❌ Sign-in failed: No email provided");
        return false;
      }
      
      console.log("📧 Sign-in attempt - Email:", user.email, "Name:", user.name);
      
      try {
        const existing = await db.query.users.findFirst({
          where: (u, { eq }) => eq(u.email, user.email),
        });
        
        if (!existing) {
          console.log("📝 New user - Creating in database:", user.email);
          const result = await db.insert(users).values({
            email: user.email,
            name: user.name || "User",
            image: user.image || null,
            role: "customer",
          }).returning();
          console.log("✅ User created successfully:", result);
        } else {
          console.log("✅ User already exists:", existing.email);
        }
      } catch (error) {
        // Database unavailable - allow login anyway
        console.error("❌ Database unavailable during sign-in:", error);
      }
      return true;
    },
  },
};
