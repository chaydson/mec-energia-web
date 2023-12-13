import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { CardProps } from "@/types/app";
import Card from "@/components/Card";
import { Typography } from "@mui/material";

interface DistributorCardProps extends CardProps {
  id: number;
  name: string;
  isActive: boolean;
  consumerUnitsCount: number;
  pendingTariffsCount: number;
}

const getDistributorCardVariant = ({
  isActive,
  pendingTariffsCount,
}: {
  isActive: boolean;
  pendingTariffsCount: number;
}) => {
  if (!isActive) {
    return "disabled";
  }

  if (pendingTariffsCount > 0) {
    return "warning";
  }

  return "default";
};

const getDistributorCardAction = ({
  consumerUnitsCount,
  pendingTariffsCount,
}: {
  consumerUnitsCount: number;
  pendingTariffsCount: number;
}) => {
  if (pendingTariffsCount === 1) {
    return "1 tarifa pendente";
  }

  if (pendingTariffsCount > 0) {
    return `${pendingTariffsCount} tarifas pendentes`;
  }

  if (consumerUnitsCount === 1) {
    return "1 unidade consumidora";
  }

  if (consumerUnitsCount > 1) {
    return `${consumerUnitsCount} unidades consumidoras`;
  }

  return "Nenhuma unidade";
};

const DistributorCard = ({
  id,
  name,
  isActive,
  consumerUnitsCount,
  pendingTariffsCount,
  dense,
  selected,
}: DistributorCardProps) => {
  const router = useRouter();

  const variant = useMemo(
    () =>
      getDistributorCardVariant({
        isActive,
        pendingTariffsCount,
      }),
    [isActive, pendingTariffsCount]
  );

  const handleDistributorCardClick = useCallback(() => {
    router.push(`/distribuidoras/${id}`);
  }, [router, id]);

  return (
    <Card
      name={name}
      dense={dense}
      selected={selected}
      variant={variant}
      action={
        <Typography
          variant="body2"
          {...(variant !== "warning" && { color: "text.secondary" })}
        >
          {getDistributorCardAction({
            consumerUnitsCount,
            pendingTariffsCount,
          })}
        </Typography>
      }
      onClick={handleDistributorCardClick}
    />
  );
};

export default DistributorCard;
