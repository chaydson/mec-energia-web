import { NextPage } from "next";
import DefaultTemplateV2 from "@/templates/DefaultV2";
import ProfileTemplate from "@/templates/Profile";
import SuccessNotification from "@/components/Notification/SuccessNotification";
import FailNotification from "@/components/Notification/FailNotification";

const ProfilePage: NextPage = () => {
  return (
    <DefaultTemplateV2>
      <ProfileTemplate />
      <SuccessNotification />
      <FailNotification />
    </DefaultTemplateV2>
  );
};

export default ProfilePage;
