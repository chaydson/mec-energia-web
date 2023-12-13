import { useDispatch, useSelector } from "react-redux";
import {
  selectConsumerUnitActiveFilter,
  setConsumerUnitActiveFilter,
} from "@/store/appSlice";
import { ConsumerUnitFilter } from "@/types/app";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import ViewModuleRoundedIcon from "@mui/icons-material/ViewModuleRounded";
import FilterButtons from "@/components/FilterButtons";

const ConsumerUnitsFilterButtons = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectConsumerUnitActiveFilter);

  const handleButtonClick = (filter: ConsumerUnitFilter) => () => {
    dispatch(setConsumerUnitActiveFilter(filter));
  };

  return (
    <FilterButtons
      buttons={[
        {
          active: activeFilter === "pending",
          Icon: WarningRoundedIcon,
          title: "Pendentes/Abertas",
          onClick: handleButtonClick("pending"),
        },
        {
          active: activeFilter === "all",
          Icon: ViewModuleRoundedIcon,
          title: "Tudo",
          onClick: handleButtonClick("all"),
        },
      ]}
    />
  );
};

export default ConsumerUnitsFilterButtons;
