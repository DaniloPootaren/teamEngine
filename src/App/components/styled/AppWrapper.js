import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';
import theme from "./defaultTheme";

const AppWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: ${theme.spacings.md};
  padding-bottom: ${theme.spacings.md};
  display: block;
  background-color: #ffffff;
  width: 600px;
  border-radius: 10px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  ${breakpoint('mobile', 'tablet')`
      width: auto;
      height: 100%;
      `}
`;

export default AppWrapper;
