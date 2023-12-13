import { Box } from "@mui/material";
import DistributorCard from "./DistributorCard";
import { mockedDistributor } from "../../mocks/mockedDistributor";

const DistributorCardGrid = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      gap={2}
    >
      {mockedDistributor.map((distributor) => (
        <DistributorCard
          key={distributor.id}
          id={distributor.id}
          name={distributor.name}
          cnpj={distributor.cnpj}
          isActive={distributor.isActive}
          tariffs={distributor.tariffs}
          consumerUnits={distributor.consumerUnits}
          university={distributor.university}
        />
      ))}
    </Box>
  );
};

export default DistributorCardGrid;
