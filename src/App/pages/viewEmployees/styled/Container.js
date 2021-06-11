import styled from "styled-components";
import Flex from '../../../components/styled/Flex'
// import { detectValue, display, margin, padding } from "../../styled/utils";
import theme from "../../../components/styled/defaultTheme";

const Container = styled(Flex)`
  flex-direction: column;
  min-width: 40em;
  min-height: 14em;
  border: 1px solid #cccccc;
  border-radius: 1em;
  padding: 1em 2em 1em 2em;
  margin-bottom: 1em;
  &:hover {
    -webkit-box-shadow: 5px 5px 15px 5px ${theme.colors.gray}; 
     box-shadow: 5px 5px 15px 5px ${theme.colors.gray}; 
  }
`;

export default Container;
