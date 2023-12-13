import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { Recommendation } from "@/types/recommendation";
import { Box, Typography } from "@mui/material";

import { useState } from "react";
import { BaseCostInfoModal } from "@/components/ConsumerUnit/Content/BaseCostInfoModal";
import { BaseCostComparisonPlot } from "./BaseCostComparisonPlot";
import { OpenBaseCostInfo } from "./DetailedAnalysisDrawer/OpenBaseCostInfo";
import { formatMoney } from "@/utils/number";

interface Props {
  dates: string[][];
  hasErrors: boolean;
  recommendation: Recommendation;
}

export const BaseCostComparisonCard = ({
  dates,
  hasErrors,
  recommendation,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const KnowMore = () => (
    <>
      {/* FIXME: tá certo colorir assim? */}
      <Typography sx={{ color: "gray" }} variant="body2">
        *O custo-base é sempre menor que do valor da fatura,{" "}
        <OpenBaseCostInfo onClick={() => setIsModalOpen(true)}>
          saiba mais
        </OpenBaseCostInfo>
        .
      </Typography>

      <BaseCostInfoModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );

  if (hasErrors)
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" sx={{ marginBottom: 1 }}>
            Comparativo custo-base
          </Typography>

          <Typography sx={{ color: "gray" }}>Indisponível</Typography>

          <KnowMore />
        </CardContent>
      </Card>
    );

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Comparativo custo-base</Typography>

        <Typography sx={{ color: "gray" }} variant="body2">
          Últimos 12 meses
        </Typography>

        <BaseCostComparisonPlot recommendation={recommendation} dates={dates} />

        <br />
        <Typography>
          Total atual:{" "}
          {formatMoney(
            recommendation.costsComparisonPlot.totalTotalCostInReaisInCurrent
          )}
        </Typography>

        <Box>
          <Typography sx={{ display: "inline", marginRight: 0.5 }}>
            Total proposto:{" "}
            {formatMoney(
              recommendation.costsComparisonPlot
                .totalTotalCostInReaisInRecommended
            )}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              p: 0.5,
              borderRadius: 1,
              display: "inline",
              bgcolor: "warning.main",
            }}
          >
            {recommendation.nominalSavingsPercentage.toFixed(1)}% de economia
            nominal
          </Typography>
        </Box>

        <br />
        <KnowMore />
      </CardContent>
    </Card>
  );
};
