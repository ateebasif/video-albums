import styled from "@emotion/styled";

export const StyledButton = styled.button`
  height: 48px;
`;

export const StyledVideoPlayer = styled.video`
  border-radius: 4px !important;
`;

export const Container = styled.div`
  margin: auto;
  height: fit-content;
  width: fit-content;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  ${"" /*  */}
  display:flex;
  flex-direction: column;
  align-items: center;
`;

export const AlertWrapper = styled.button`
  ${"" /* width: fit-content; */}
  position: absolute;
  width: 300px;
  left: -150px;
  top: -100px;
`;
