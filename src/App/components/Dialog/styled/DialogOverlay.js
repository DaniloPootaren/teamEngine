import styled from "styled-components";


const DialogOverlay = styled.div`
  position: absolute;
  z-index: 1010;
  display: flex;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default DialogOverlay;
