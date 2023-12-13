import "next-auth";
import { UserRole } from "./person";

declare module "next-auth" {
  interface User {
    id: string | number;
    firstName: string;
    lastName: string;
    email: string;
    type: UserRole;
    universityId?: number;
    token: string;
  }
  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string | number;
    token: string;
    type: UserRole;
    firstName: string;
    lastName: string;
    email: string;
    universityId?: number;
  }
}
