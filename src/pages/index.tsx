import type { NextPage } from "next";
import { useSession } from "next-auth/react";

import SignInTemplate from "@/templates/Auth/SignIn";
import DashboardTemplate from "@/templates/Dashboard";
import LoadingTemplate from "@/templates/Loading";
import { UserRole } from "@/types/person";
import { useRouter } from "next/router";
import { INSTITUTIONS_ROUTE } from "@/routes";

const DashboardPage: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    return <SignInTemplate />;
  }

  if (session?.user.type === UserRole.SUPER_USER) {
    router.push(INSTITUTIONS_ROUTE.href);
  } else {
    return <DashboardTemplate />;
  }

  return <LoadingTemplate />;
};

export default DashboardPage;
