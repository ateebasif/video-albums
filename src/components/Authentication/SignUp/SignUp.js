import React from "react";
import { Text, chakra } from "@chakra-ui/react";

import Form from "./Form";
import {
  Container,
  FormContainer,
  TextContainer,
  HeadingContainer,
  ContentContainer,
} from "./styles";

function Login() {
  return (
    <chakra.div p="40px" display="flex" justifyContent="center" mt="10%">
      <Container>
        <ContentContainer>
          <TextContainer>
            <HeadingContainer>Fan Crowd</HeadingContainer>
            <Text textAlign="left" fontSize="20px">
              Connect with <br /> sports fan <br /> around you <br />
            </Text>
          </TextContainer>
          <FormContainer>
            <Form />
          </FormContainer>
        </ContentContainer>
      </Container>
    </chakra.div>
  );
}

export default Login;
