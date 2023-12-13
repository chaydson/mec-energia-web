import { tariffLabelToPtBr, TariffsTableRow } from "@/types/recommendation";
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
  rows: TariffsTableRow[];
}

export const TariffsTable = ({ rows }: Props) => {
  const copy = [...rows].sort((a, b) => {
    if (a.billingTime > b.billingTime) return -1;
    if (a.billingTime < b.billingTime) return 1;
    return 0;
  });

  copy.sort((a, b) => {
    if (a.label > b.label) return -1;
    if (a.label < b.label) return 1;
    return 0;
  });

  const tableRows = copy.map((r) => ({
    ...r,
    blue: r.blue ? r.blue.toLocaleString("pt-BR") : "-",
    green: r.green ? r.green.toLocaleString("pt-BR") : "-",
  }));

  return (
    <>
      <Box>
        <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
          <Table aria-label="simple table">
            <TableHead sx={{ bgcolor: "primary.main", borderRadius: 3 }}>
              <TableRow sx={{ th: { color: "white" } }}>
                <TableCell sx={{ borderRadius: 0 }} align="left">
                  Tipo de tarifa
                </TableCell>
                <TableCell sx={{ borderRadius: 0 }} align="center">
                  Posto tarifário
                </TableCell>
                <TableCell sx={{ borderRadius: 0 }} align="right">
                  Valor tarifa azul
                </TableCell>
                <TableCell sx={{ borderRadius: 0 }} align="right">
                  Valor tarifa verde
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody
              sx={{
                "tr:nth-of-type(even)": { bgcolor: "background.default" },
              }}
            >
              {tableRows.map((row) => (
                <TableRow
                  key={row.label}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{tariffLabelToPtBr[row.label]}</TableCell>
                  <TableCell align="center">{row.billingTime}</TableCell>
                  <TableCell align="right">{row.blue}</TableCell>
                  <TableCell align="right">{row.green}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
