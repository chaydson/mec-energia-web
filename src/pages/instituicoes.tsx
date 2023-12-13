import { NextPage } from "next";
import DefaultTemplateV2 from "@/templates/DefaultV2";
import InstitutionsTemplate from "@/templates/Institution";
import InstitutionHeaderAction from "@/templates/Institution/HeaderAction";
import SuccessNotification from "@/components/Notification/SuccessNotification";
import FailNotification from "@/components/Notification/FailNotification";

const InstitutionsPage: NextPage = () => {
  return (
    <DefaultTemplateV2 headerAction={<InstitutionHeaderAction />}>
      <InstitutionsTemplate />
      <SuccessNotification />
      <FailNotification />
    </DefaultTemplateV2>
  );
};

export default InstitutionsPage;
