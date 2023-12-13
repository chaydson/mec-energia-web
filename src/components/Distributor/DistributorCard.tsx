import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Badge,
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { DistributorPropsTariffs } from "../../types/distributor";
import BusinessIcon from "@mui/icons-material/Business";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const DistributorCard = ({
  id,
  name: title,
  isActive: is_active = true,
  tariffs,
  consumerUnits: consumer_units,
}: DistributorPropsTariffs) => {
  const router = useRouter();
  const DistributorUrl = `/distribuidoras/${id}`;
  const [overdue, setOverdue] = useState(false);
  const [textBottomCard, setTextBottomCard] = useState("");

  useEffect(() => {
    const isOverdue = tariffs?.find((tariff) => tariff.overdue === true);
    if (isOverdue !== undefined) setOverdue(true);
    else setOverdue(false);
  }, [tariffs]);

  const handleCardClick = () => {
    router.push(DistributorUrl);
  };

  const handleTextBottomCard = useCallback(() => {
    if (!is_active) setTextBottomCard("Desativada");
    else if (tariffs?.find((tariff) => tariff.overdue === true))
      setTextBottomCard("Tarifas pendentes");
    else if (consumer_units === 0)
      setTextBottomCard("Nenhuma unidade consumidora");
    else if (consumer_units === 1) setTextBottomCard("1 unidade consumidora");
    else if (consumer_units)
      setTextBottomCard(`${consumer_units} unidades consumidoras`);
  }, [consumer_units, is_active, tariffs]);

  useEffect(() => {
    handleTextBottomCard();
  }, [handleTextBottomCard]);

  return (
    <>
      {router.pathname === "/distribuidoras/[id]" ? (
        <Card
          sx={{
            height: 120,
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            background: overdue ? "grey" : "",
            color: overdue ? "white" : "",
          }}
          variant={!is_active ? "outlined" : "elevation"}
          onClick={handleCardClick}
        >
          <CardContent
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              pt: 0,
            }}
          >
            <Typography variant="h5">{title}</Typography>
          </CardContent>

          <Divider sx={{ background: overdue ? "white" : "" }} />
          <Box ml={1} p={1}>
            <Typography>{textBottomCard}</Typography>
          </Box>
        </Card>
      ) : (
        <Card
          sx={{
            height: 196,
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            background: overdue ? "grey" : "",
            color: overdue ? "white" : "",
          }}
          variant={!is_active ? "outlined" : "elevation"}
          onClick={handleCardClick}
        >
          <BusinessIcon sx={{ margin: 2 }} />
          <CardContent
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              pt: 0,
            }}
          >
            <Typography variant="h5">{title}</Typography>
          </CardContent>

          <Divider sx={{ background: overdue ? "white" : "" }} />
          <Box ml={1} p={1} display="flex" justifyContent="space-between">
            <Typography>{textBottomCard}</Typography>
            <IconButton color="inherit">
              <Badge badgeContent={"!"} color="warning">
                <AttachMoneyIcon />
              </Badge>
            </IconButton>
          </Box>
        </Card>
      )}
    </>
  );
};

export default DistributorCard;
