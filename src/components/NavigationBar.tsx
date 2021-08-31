import React from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Box, Button, createStyles, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const NavigationBar = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ marginBottom: "2rem" }}>
      <Toolbar>
        <Box>
          <Button
            className={classes.button}
            onClick={() => history.push("/")}
            color="inherit"
          >
            Home
          </Button>
        </Box>
        <Box>
          <Button
            className={classes.button}
            onClick={() => history.push("/contracts")}
            color="inherit"
            data-testid="nav-contracts"
          >
            Contracts
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;

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
