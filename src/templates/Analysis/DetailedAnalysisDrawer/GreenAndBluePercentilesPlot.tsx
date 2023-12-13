/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box } from "@mui/material";

import { Chart } from "react-chartjs-2";

/**
 * FIXME: Esse plot é estático, mas o backend oferece dados suficientes
 * pra fazer um plot de percentis dinâmico.
 */
export const GreenAndBluePercentilesPlot = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Chart
        type="line"
        data={{
          labels: [
            "P10",
            "P20",
            "P30",
            "P40",
            "P50",
            "P60",
            "P70",
            "P80",
            "P90",
            "P95",
            "P98",
          ],
          datasets: [
            {
              label: "Valor anual azul",
              data: [
                142500, 140000, 126000, 127000, 125500, 124300, 121500, 122900,
                124000, 126700, 127800,
              ],
              cubicInterpolationMode: "monotone",
              tension: 0.5,
              backgroundColor: "#0E438C", //colorInfo
              borderColor: "#0E438C", //colorInfo
              pointStyle: "circle",
              pointRadius: 2,
              pointHoverRadius: 9,
            },
            {
              label: "Valor anual verde",
              data: [
                125000, 123500, 122500, 122300, 121700, 121700, 121800, 121800,
                121800, 124000, 125200,
              ],
              cubicInterpolationMode: "monotone",
              tension: 0.5,
              backgroundColor: "#0A5C67", //colorPrimary
              borderColor: "#0A5C67", //colorPrimary
              pointStyle: "rect",
              pointRadius: 3,
              pointHoverRadius: 10,
            },
          ],
        }}
        options={{
          responsive: true,
          interaction: {
            intersect: false,
            mode: "nearest",
            axis: "x",
          },
          plugins: {
            title: {
              display: true,
              text: "Comparativo de percentis - modalidade tarifária",
              font: {
                size: 16,
              },
            },
            legend: {
              position: "top",
              labels: {
                usePointStyle: true,
              },
            },
            tooltip: {
              usePointStyle: true,
              callbacks: {
                title: function (context) {
                  const title = context[0].label || "";
                  return title.replace(",", "/");
                },
                // @ts-ignore
                label: function (context) {
                  let label = context.dataset.label || "";

                  if (label == "Indisponível") {
                    if (context.parsed.y == null) {
                      return null;
                    }
                    return "Informações indisponíveis";
                  }
                  if (label) {
                    label += ": ";
                  }
                  if (context.parsed.y !== null) {
                    label += new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(context.parsed.y);
                  }

                  return label;
                },
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              offset: true,
            },
            y: {
              title: {
                display: true,
                text: "R$",
              },
              grid: {
                color: "#C3C3C3",
              },
            },
          },
        }}
      />
    </Box>
  );
};
