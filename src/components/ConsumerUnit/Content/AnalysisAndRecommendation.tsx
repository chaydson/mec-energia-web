import { useState } from "react";
import { useSelector } from "react-redux";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { WarningAmberOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import { useRecommendationQuery, useRecommendationSettingsQuery } from "@/api";

import { BaseCostComparisonCard } from "@/templates/Analysis/BaseCostComparisonCard";
import { MeasuredConsumptionPlot } from "@/templates/Analysis/MeasuredConsumptionPlot";
import { MeasuredDemandPlot } from "@/templates/Analysis/MeasuredDemandPlot";
import { RecommendationCard } from "@/templates/Analysis/RecommendationCard";
import { selectActiveConsumerUnitId } from "@/store/appSlice";
import { DetailedAnalysisDrawer } from "@/templates/Analysis/DetailedAnalysisDrawer";
import { monthYearForPlot } from "@/utils/date";

import "./configChartjs";

export const AnalysisAndRecommendation = () => {
  const consumerUnitId = useSelector(selectActiveConsumerUnitId);
  const { data: recommendation, isLoading } = useRecommendationQuery(
    consumerUnitId ?? skipToken
  );
  const { data: recommendationSettings } = useRecommendationSettingsQuery();
  const [isDetailedAnalysisOpen, setIsDetailedAnalysisOpen] = useState(false);

  if (isLoading || !recommendation || !recommendationSettings)
    return (
      <Box>
        <Grid container>
          <Grid item>
            <Typography sx={{ color: "gray" }}>Carregando...</Typography>
          </Grid>
        </Grid>
      </Box>
    );

  const dates = recommendation.dates.map((d) => monthYearForPlot(d));
  const hasErrors = !!recommendation && recommendation.errors.length > 0;
  const hasWarnings = !!recommendation && recommendation.warnings.length > 0;

  const {
    MINIMUM_ENERGY_BILLS_FOR_RECOMMENDATION,
    MINIMUM_PERCENTAGE_DIFFERENCE_FOR_CONTRACT_RENOVATION,
  } = recommendationSettings;

  const hasMinimumEnergyBills =
    recommendation.energyBillsCount >= MINIMUM_ENERGY_BILLS_FOR_RECOMMENDATION;

  return (
    <Box>
      {(hasErrors || hasWarnings) && (
        <Grid container spacing={1} sx={{ mb: 1 }}>
          {recommendation.errors.map((error, i) => (
            <Grid key={i} item xs={12}>
              <Alert
                key={i}
                severity="warning"
                icon={<WarningAmberOutlined style={{ color: "#000" }} />}
              >
                {error}
              </Alert>
            </Grid>
          ))}
          {recommendation.warnings.map((warn, i) => (
            <Grid key={i} item xs={12}>
              <Alert severity="info" variant="outlined">
                {warn}
              </Alert>
            </Grid>
          ))}
        </Grid>
      )}

      {hasMinimumEnergyBills && !hasErrors && (
        <Button
          sx={{ my: 1 }}
          variant="contained"
          onClick={() => setIsDetailedAnalysisOpen(true)}
        >
          Ver análise detalhada
        </Button>
      )}

      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="stretch"
        justifyContent="center"
      >
        <Grid item xs={6}>
          <RecommendationCard
            recommendation={recommendation}
            hasErrors={hasErrors}
            minimumPercentageForContractRenovation={
              MINIMUM_PERCENTAGE_DIFFERENCE_FOR_CONTRACT_RENOVATION
            }
          />
        </Grid>

        <Grid item xs={6}>
          <BaseCostComparisonCard
            dates={dates}
            recommendation={recommendation}
            hasErrors={hasErrors}
          />
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Consumo medido</Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                Últimos 12 meses
              </Typography>

              <MeasuredConsumptionPlot
                dates={dates}
                recommendation={recommendation}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">{"Demanda medida"}</Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                Últimos 12 meses
              </Typography>

              <MeasuredDemandPlot
                dates={dates}
                recommendation={recommendation}
                isGreen={recommendation.currentContract.tariffFlag === "G"}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {!hasErrors && hasMinimumEnergyBills && (
        <DetailedAnalysisDrawer
          open={isDetailedAnalysisOpen}
          recommendation={recommendation}
          dates={recommendation.dates}
          recommendationSettings={recommendationSettings}
          onClose={() => setIsDetailedAnalysisOpen(false)}
        />
      )}
    </Box>
  );
};
