import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface ConfirmWarningProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmWarning = ({ open, onConfirm, onCancel }: ConfirmWarningProps) => (
  <Dialog open={open}>
    <DialogTitle>Confirmar ação</DialogTitle>

    <DialogContent>
      <DialogContentText>
        Tem certeza que deseja realizar essa ação?.
      </DialogContentText>
    </DialogContent>

    <DialogActions>
      <Button onClick={onConfirm}>Sim</Button>

      <Button autoFocus onClick={onCancel}>
        Não
      </Button>
    </DialogActions>
  </Dialog>
);

export default ConfirmWarning;
