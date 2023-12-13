import { Box } from "@mui/material";
import ConsumerUnitCard from "@/components/ConsumerUnit/Card";

const mockedConsumerUnits = [
  {
    id: 1,
    title: "Campus Darcy Ribeiro Gleba A1",
    disabled: false,
    favorite: true,
    pendencies: [
      { month: 11, year: 2022 },
      { month: 10, year: 2022 },
    ],
  },
  {
    id: 2,
    title: "Campus Gama 2",
    disabled: false,
    favorite: true,
    pendencies: [{ month: 11, year: 2022 }],
  },
  {
    id: 3,
    title: "Campus Ceilândia 3",
    disabled: false,
    favorite: true,
    pendencies: [
      { month: 11, year: 2022 },
      { month: 10, year: 2022 },
      { month: 9, year: 2022 },
    ],
  },
  {
    id: 4,
    title: "Campus Darcy Ribeiro Gleba A 4",
    disabled: false,
  },
  {
    id: 5,
    title: "Campus Gama 5",
    disabled: false,
  },
  {
    id: 6,
    title: "Campus Ceilândia 6",
    disabled: false,
  },
  {
    id: 7,
    title: "Campus Darcy Ribeiro Gleba A 7",
    disabled: true,
  },
  {
    id: 8,
    title: "Campus Gama 8",
    disabled: true,
  },
  {
    id: 9,
    title: "Campus Ceilândia 9",
    disabled: true,
  },
];

const ConsumerUnitCardGrid = () => {
  return (
    // Can't use Grid componente https://github.com/mui/material-ui/issues/34605
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      gap={2}
    >
      {mockedConsumerUnits.map((consumerUnit) => (
        <ConsumerUnitCard
          key={consumerUnit.id}
          id={consumerUnit.id}
          title={consumerUnit.title}
          pendencies={consumerUnit.pendencies}
          disabled={consumerUnit.disabled}
          favorite={consumerUnit.favorite}
        />
      ))}
    </Box>
  );
};

export default ConsumerUnitCardGrid;
