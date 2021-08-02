import React, { useState } from "react";
import _get from "lodash/get";
import _extend from "lodash/extend";
import useRedirect from "hooks/redirect";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";

import { signIn } from "utils/firebase/loginLogout";

import { FormContainerr, StyledText } from "./styles";

function Form() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [signUpResponse, setSignUpResponse] = useState("");
  let history = useRedirect();

  const handleOnChange = (e) => {
    const targetInput = _get(e, "target.name", "");
    const targetInputValue = _get(e, "target.value", "");
    const values = credentials;

    const updatedInputValues = _extend(values, {
      ...values,
      [targetInput]: targetInputValue,
    });

    setCredentials(updatedInputValues);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    const res = await signIn(email, password);

    if (res === true) history.push("/home");

    setSignUpResponse(res);
  };

  const onSignUp = () => history.push("/sign-up");

  return (
    <div>
      <FormContainerr>
        <form onSubmit={handleOnSubmit}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleOnChange}
            />
          </FormControl>

          <FormControl mt="10px" id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              onChange={handleOnChange}
              placeholder="Password"
            />
          </FormControl>

          <Box mt="15px">
            <StyledText display="flex">
              Need an account?
              <span onClick={onSignUp}>Click to Sign up</span>
            </StyledText>
          </Box>

          <Box mt="10px" mb="6px">
            {signUpResponse && <Text color="red">{signUpResponse}</Text>}{" "}
          </Box>

          <Button mt="8px" width="100%" type="submit">
            Login
          </Button>
        </form>
      </FormContainerr>
    </div>
  );
}

export default Form;
