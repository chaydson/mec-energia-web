import { useDispatch, useSelector } from "react-redux";
import {
  selectDashboardActiveFilter,
  setDashboardActiveFilter,
} from "@/store/appSlice";
import { DashboardFilter } from "@/types/app";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import ViewModuleRoundedIcon from "@mui/icons-material/ViewModuleRounded";
import FilterButtons from "@/components/FilterButtons";

const DashboardFilterButtons = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectDashboardActiveFilter);

  const handleButtonClick = (filter: DashboardFilter) => () => {
    dispatch(setDashboardActiveFilter(filter));
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
          active: activeFilter === "active",
          Icon: FlashOnRoundedIcon,
          title: "Ativas",
          onClick: handleButtonClick("active"),
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

export default DashboardFilterButtons;
