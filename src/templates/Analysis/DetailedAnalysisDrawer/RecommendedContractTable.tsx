import { RecommendationContract } from "@/types/recommendation";
import { tariffFlags } from "@/utils/tariff";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";

interface Props {
  recommendedContract: RecommendationContract;
  currentContract: RecommendationContract;
}

interface CurrentVsRecommendedRow {
  label: string;
  current: string | number | null;
  recommended: string | number | null;
  different: boolean;
}

export const RecommendedContractTable = ({
  recommendedContract,
  currentContract,
}: Props) => {
  const fixedRows = [
    { label: "Distribuidora", value: recommendedContract.distributor },
    { label: "Instiuição", value: recommendedContract.university },
    { label: "Unidade Consumidora", value: recommendedContract.consumerUnit },
    { label: "UC código", value: recommendedContract.consumerUnitCode },
    {
      label: "Tensão primária de distribuição",
      value: recommendedContract.supplyVoltage + " kV",
    },
    { label: "Subgrupo", value: recommendedContract.subgroup },
  ];

  const rows: CurrentVsRecommendedRow[] = [
    {
      label: "Modalidade tarifária",
      current: tariffFlags[currentContract.tariffFlag],
      recommended: tariffFlags[recommendedContract.tariffFlag],
      different: currentContract.tariffFlag !== recommendedContract.tariffFlag,
    },
    {
      label: "Demanda contratada atual de ponta",
      current: currentContract.peakDemandInKw + " kW",
      recommended: recommendedContract.peakDemandInKw + " kW",
      different:
        currentContract.peakDemandInKw !== recommendedContract.peakDemandInKw,
    },
    {
      label: "Demanda contratada atual fora de ponta",
      current: currentContract.offPeakDemandInKw + " kW",
      recommended: recommendedContract.offPeakDemandInKw + " kW",
      different:
        currentContract.offPeakDemandInKw !==
        recommendedContract.offPeakDemandInKw,
    },
  ];

  return (
    <>
      <Box>
        <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead
              sx={{ bgcolor: "primary.main", display: "table-header-group" }}
            >
              <TableRow sx={{ th: { color: "white" } }}>
                <TableCell />
                <TableCell align="center">Contrato atual</TableCell>
                <TableCell align="center">Contrato recomendado</TableCell>
              </TableRow>
            </TableHead>

            <TableBody
              sx={{
                "tr:nth-of-type(even)": { bgcolor: "background.default" },
                "tr:last-child td, tr:last-child th": { border: 0 },
              }}
            >
              {fixedRows.map((row) => (
                <TableRow key={row.label}>
                  <TableCell>{row.label}</TableCell>
                  <TableCell align="center" colSpan={2}>
                    {row.value}
                  </TableCell>
                </TableRow>
              ))}

              {rows.map((row) => (
                <TableRow key={row.label}>
                  <TableCell>{row.label}</TableCell>
                  <TableCell
                    align="center"
                    sx={{ textDecoration: row.different ? "line-through" : "" }}
                  >
                    {row.current}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    {row.recommended}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
