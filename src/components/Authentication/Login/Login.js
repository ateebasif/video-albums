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
            <HeadingContainer>Video Lessons</HeadingContainer>
            <Text textAlign="left" fontSize="20px">
              Find the <br /> content you <br /> want to learn <br />
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
