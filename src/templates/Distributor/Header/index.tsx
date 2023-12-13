import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { skipToken } from "@reduxjs/toolkit/dist/query";

import { Box, Button, Collapse, Container, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { useGetDistributorSubgroupsQuery, useGetDistributorQuery } from "@/api";
import {
  selectActiveDistributorId,
  setActiveSubgroup,
  setIsDistributorEditFormOpen,
} from "@/store/appSlice";

import DistributorContentHeaderTabs from "./Tabs";
import DistributorEditForm from "@/components/Distributor/Form/DistributorEditForm";

const DistributorContentHeader = () => {
  const dispatch = useDispatch();
  const distributorId = useSelector(selectActiveDistributorId);

  const { data: distributor } = useGetDistributorQuery(
    distributorId ?? skipToken
  );

  const { data: tariffsSubgroups, isLoading: isTariffsSubgroupsLoading } =
    useGetDistributorSubgroupsQuery(distributorId ?? skipToken);

  useEffect(() => {
    if (!tariffsSubgroups || tariffsSubgroups.length === 0) {
      dispatch(setActiveSubgroup(null));

      return;
    }

    const firstPendingTariff = tariffsSubgroups.findIndex(
      ({ pending }) => pending
    );

    if (firstPendingTariff >= 0) {
      dispatch(
        setActiveSubgroup(tariffsSubgroups[firstPendingTariff].subgroup)
      );

      return;
    }

    dispatch(setActiveSubgroup(tariffsSubgroups[0].subgroup));
  }, [dispatch, tariffsSubgroups]);

  const shouldShowTabs = useMemo(
    () =>
      tariffsSubgroups &&
      tariffsSubgroups.length > 1 &&
      !isTariffsSubgroupsLoading,
    [tariffsSubgroups, isTariffsSubgroupsLoading]
  );

  const handleEditDistributorClick = useCallback(() => {
    dispatch(setIsDistributorEditFormOpen(true));
  }, [dispatch]);

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={1}
      sx={{ backgroundColor: "background.default" }}
    >
      <Container>
        <Box display="flex">
          <Box>
            <Box display="flex" alignItems="center">
              <Typography variant="h4">{distributor?.name}</Typography>

              <Box pl={2}>
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  size="small"
                  onClick={handleEditDistributorClick}
                >
                  Editar
                </Button>

                <DistributorEditForm />
              </Box>
            </Box>

            <Typography>
              CNPJ: <strong>{distributor?.cnpj}</strong>
            </Typography>
          </Box>
        </Box>

        <Collapse in={shouldShowTabs}>
          <Box minHeight={24}>
            <DistributorContentHeaderTabs />
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
};

export default DistributorContentHeader;
