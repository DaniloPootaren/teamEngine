import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';
import Flex from '../../../components/styled/Flex'
import theme from "../../../components/styled/defaultTheme";

const Container = styled(Flex)`
  flex-direction: column;
  position: relative;
  width: 40em;
  min-height: 14em;
  border: 1px solid #cccccc;
  border-radius: 1em;
  padding: 1em 2em 1em 2em;
  margin-bottom: 1em;
  &:hover {
    -webkit-box-shadow: 5px 5px 15px 5px ${theme.colors.gray}; 
     box-shadow: 5px 5px 15px 5px ${theme.colors.gray}; 
  }

  ${breakpoint('mobile', 'tablet')`
      width: 25em;
      `}
`;

export default Container;
