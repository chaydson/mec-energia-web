import { useFetchInstitutionsQuery } from "@/api";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import InstitutionEditButton from "./EditButton";

const InstitutionsTemplate = () => {
  const { data: institutions } = useFetchInstitutionsQuery();
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell width="70px">Ativa</TableCell>
            <TableCell width="122px">Sigla</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell width="166px">CNPJ</TableCell>
            <TableCell width="48px"></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {institutions?.map((institution) => (
            <TableRow key={institution.id}>
              <TableCell>-</TableCell>
              <TableCell>{institution.acronym}</TableCell>
              <TableCell>{institution.name}</TableCell>
              <TableCell>{institution.cnpj}</TableCell>
              <TableCell>
                <InstitutionEditButton institutionId={institution.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InstitutionsTemplate;
