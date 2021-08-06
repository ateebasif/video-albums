import React from "react";
import _get from "lodash/get";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

function AlertMessage(props) {
  const { alertInfo } = props;
  return (
    <Alert status={_get(alertInfo, "status", "")}>
      <AlertIcon />
      <AlertTitle mr={2}>{_get(alertInfo, "message", "")}</AlertTitle>
    </Alert>
  );
}

export default AlertMessage;
