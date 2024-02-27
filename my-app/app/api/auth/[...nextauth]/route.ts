import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth"

const hashler = NextAuth(authOptions);

export { hashler as GET, hashler as POST}