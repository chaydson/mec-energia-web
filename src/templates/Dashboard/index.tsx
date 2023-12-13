import { useMemo } from "react";
import Head from "next/head";
import { getHeadTitle } from "@/utils/head";
import DashboardFilterButtons from "@/templates/Dashboard/FilterButtons";
import DashboardCardGrid from "@/templates/Dashboard/Grid";
import DefaultTemplateV2 from "@/templates/DefaultV2";

const DashboardTemplate = () => {
  const headTitle = useMemo(() => getHeadTitle("Painel"), []);

  return (
    <DefaultTemplateV2
      headerAction={<DashboardFilterButtons />}
      contentContainerMaxWidth="xl"
    >
      <Head>
        <title>{headTitle}</title>
      </Head>

      <DashboardCardGrid />
    </DefaultTemplateV2>
  );
};

export default DashboardTemplate;
