import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { useHistory } from "react-router-dom";

import TitleBar from "components/TitleBar";
import { RootState } from "store/reducers";
import {
  getContractsAction,
  putContractAction,
} from "features/contracts/contractAsyncActions";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  createStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import FormSubmission from "components/FormSubmission";

const ContractsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { contracts, loading } = useSelector(
    (state: RootState) => state.contract
  );

  const smallScreen = useMediaQuery("(max-width:600px)");
  const classes = useStyles();

  useEffect(() => {
    dispatch(getContractsAction());
  }, [dispatch]);

  return (
    <div>
      <TitleBar title={"Contracts Page"} />
      <>
        {loading ? (
          <Typography data-testid={"loading"} variant={"h2"}>
            Loading.. Please wait..
          </Typography>
        ) : (
          contracts.map((c) => (
            <Card
              style={{ marginBottom: "1rem" }}
              key={c.contractId}
              data-testid={"card"}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {c.contractId}
                </Typography>
                <Typography variant="h5" component="h2">
                  {c.company}
                </Typography>
                <Typography color="textSecondary">
                  For Renewal: {c.scheduledForRenewal ? "YES" : "NO"}{" "}
                  {c.scheduledForRenewal &&
                    `on ${format(
                      new Date(c.negotiationRenewalDate),
                      "MM/dd/yyyy"
                    ).toString()}`}
                </Typography>
                <Typography variant="body2" component="p">
                  Period Starts:{" "}
                  {format(new Date(c.periodStart), "MM/dd/yyyy").toString()},
                  <br />
                  Period Ends:{" "}
                  {format(new Date(c.periodEnd), "MM/dd/yyyy").toString()}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant={"outlined"}
                  color={"secondary"}
                  size="small"
                  onClick={() => history.push("/contracts/" + c.contractId)}
                >
                  Edit Contract
                </Button>
              </CardActions>
            </Card>
          ))
        )}
      </>
    </div>
  );
};

export default ContractsPage;

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      margin: "0 0.5rem",
      "&:focus": {
        outline: "none",
      },
    },
  })
);
