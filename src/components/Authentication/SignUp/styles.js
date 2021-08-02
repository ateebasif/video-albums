import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";

export const StyledText = styled(Text)`
  span {
    margin-left: 4px;
    color: blue;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  justify-content: center;
  display: flex;
  text-align: center;
  ${"" /* background: ${(props) => (props.bg ? props.bg : "turquoise")}; */};
`;

export const ContentContainer = styled.div`
  display: flex;
  padding: 40px;
  ${"" /* width: 10%; */}
  justify-content: center;
  border: 1px solid #babdc2;
  border-radius: 0.25rem;
`;

export const TextContainer = styled.div`
  padding-right: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeadingContainer = styled.div`
  border: 1px solid #babdc2;
  padding: 5px 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
`;

export const FormContainer = styled.div``;

export const Form = styled.form`
  width: 30%;
  border: 1px solid #babdc2;
  padding: 50px 20px;
  border-radius: 0.25rem;
`;
// .anchorText span {
//   margin-left: 4px;
//   color: blue;
//   cursor: pointer;
// }

export const FormContainerr = styled.div`
  ${
    "" /* display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12%; */
  }
  border: 1px solid #babdc2;
  border-radius: 0.25rem;
  padding: 50px 20px;
  width: 400px;
`;
