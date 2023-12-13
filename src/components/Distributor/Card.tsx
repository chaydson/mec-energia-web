import { useMemo } from "react";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import { Distributor } from "@/types/supplier";
import Card from "@/components/Card";

const DistributorCard = ({
  disabled,
  hasPendencies,
  id,
  title,
}: Distributor) => {
  const router = useRouter();

  const variant = useMemo(() => {
    if (disabled) {
      return "disabled";
    }

    if (hasPendencies) {
      return "warning";
    }

    return "default";
  }, [disabled, hasPendencies]);

  const handleCardClick = () => {
    router.push(`/distribuidoras/${id}`);
  };

  return (
    <Card
      name={title}
      variant={variant}
      {...(hasPendencies && {
        action: <Typography>Tarifas pendentes</Typography>,
        ActionIcon: AttachMoneyRoundedIcon,
        actionIconBadgeContent: "!",
      })}
      onClick={handleCardClick}
    />
  );
};

export default DistributorCard;
