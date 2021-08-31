import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import FormSubmission from "../components/FormSubmission";

import { putContractAction } from "../features/contracts/contractAsyncActions";
import { ContractModel } from "../features/contracts/contractTypes";
import { api, EndPoints } from "../axios/api-config";
import { Box, Button, LinearProgress } from "@material-ui/core";

const DetailContractPage = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const [contract, setContract] = useState<ContractModel>();

  const fetchContractById = async () => {
    try {
      const { data } = await api.get<ContractModel>(
        `${EndPoints.contracts}/${id}`
      );
      setContract(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchContractById();
  }, []);

  return (
    <div>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
        <Box mr={2}>
          <h1>Edit Contract</h1>
        </Box>
        <Box>
          <Button
            variant={"outlined"}
            color={"primary"}
            onClick={() => history.goBack()}
          >
            Back
          </Button>
        </Box>
      </Box>
      {contract ? (
        <FormSubmission
          contract={contract}
          handleUpdateAction={putContractAction}
        />
      ) : (
        <LinearProgress />
      )}
    </div>
  );
};

export default DetailContractPage;
