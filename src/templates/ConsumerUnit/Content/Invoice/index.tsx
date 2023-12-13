import { Box } from "@mui/material";
import ConsumerUnitInvoiceContentFilter from "@/templates/ConsumerUnit/Content/Invoice/Filter";
import ConsumerUnitInvoiceContentTable from "@/templates/ConsumerUnit/Content/Invoice/Table";

const ConsumerUnitInvoiceContent = () => {
  return (
    <>
      <ConsumerUnitInvoiceContentFilter />

      <Box pt={3}>
        <ConsumerUnitInvoiceContentTable />
      </Box>
    </>
  );
};

export default ConsumerUnitInvoiceContent;
