import React from "react";
import { useDispatch } from "react-redux";
import { Form, Formik, FormikProps } from "formik";

import {
  Box,
  Button,
  FormControlLabel,
  Paper,
  Switch,
  TextField,
} from "@material-ui/core";

import { DateTimePicker } from "@material-ui/pickers";
import { ContractModel } from "../features/contracts/contractTypes";

type Props = {
  contract: ContractModel;
  handleUpdateAction: (values: any) => void;
};

const FormSubmission = ({ contract, handleUpdateAction }: Props) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={contract}
      onSubmit={(values, actions) => {
        dispatch(handleUpdateAction(values));
      }}
    >
      {(formikProps: FormikProps<ContractModel>) => (
        <Box mb={4}>
          <Paper>
            <Form style={{ padding: "1rem" }}>
              <Box mb={2}>
                <TextField
                  style={{
                    marginBottom: "2rem",
                    width: "100%",
                  }}
                  value={formikProps.values.company}
                  onChange={formikProps.handleChange}
                  label={"Company"}
                  id={"company"}
                />
              </Box>
              <Box mb={2}>
                <DateTimePicker
                  fullWidth
                  inputVariant="outlined"
                  label="Period Start"
                  name="periodStart"
                  id="periodStart"
                  onClick={() => formikProps.setFieldTouched("periodStart")}
                  onChange={(date) =>
                    formikProps.setFieldValue("periodStart", date)
                  }
                  value={formikProps.values.periodStart}
                />
              </Box>
              <Box mb={2}>
                <DateTimePicker
                  fullWidth
                  inputVariant="outlined"
                  label="Period End"
                  name="periodEnd"
                  onClick={() => formikProps.setFieldTouched("periodEnd")}
                  onChange={(date) =>
                    formikProps.setFieldValue("periodEnd", date)
                  }
                  value={formikProps.values.periodEnd}
                />
              </Box>
              <Box mb={2}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={formikProps.values.scheduledForRenewal}
                      name="scheduledForRenewal"
                      onChange={formikProps.handleChange}
                    />
                  }
                  label="Scheduled for Renewal"
                />
              </Box>
              <Box mb={2}>
                <DateTimePicker
                  fullWidth
                  inputVariant="outlined"
                  label="Negotiation Renewal Date"
                  name="negotiationRenewalDate"
                  onClick={() =>
                    formikProps.setFieldTouched("negotiationRenewalDate")
                  }
                  onChange={(date) =>
                    formikProps.setFieldValue("negotiationRenewalDate", date)
                  }
                  value={formikProps.values.negotiationRenewalDate}
                />
              </Box>
              <Button
                disabled={formikProps.isSubmitting}
                type="submit"
                color={"primary"}
                variant={"contained"}
              >
                Save Contract
              </Button>
            </Form>
          </Paper>
        </Box>
      )}
    </Formik>
  );
};

export default FormSubmission;
