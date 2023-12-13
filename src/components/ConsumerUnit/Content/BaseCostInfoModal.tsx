import { Button, Grid, Modal, Typography } from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const BaseCostInfoModal = ({ open, onClose }: Props) => {
  return (
    <Modal
      sx={{ "@media print": { display: "block" } }}
      open={open}
      onClose={onClose}
    >
      <Grid
        container
        spacing={1}
        sx={{
          borderRadius: 1,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          "@media print": {
            borderRadius: 1,
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          },
        }}
      >
        <Grid item>
          <Typography variant="h6">Custo-base</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            O custo-base é calculado multiplicando o consumo medido (ou a
            demanda medida) pelas tarifas vigentes.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Ele desconsidera outros elementos que costumam fazer parte do valor
            total das faturas como: tributos, encargos setoriais, bandeiras
            tarifárias e cobranças adicionais, já que dificultariam a análise.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Por isso o custo-base é sempre menor que o valor da fatura.
          </Typography>
        </Grid>

        <Grid item>
          <Button onClick={onClose} variant="text">
            Fechar
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};
