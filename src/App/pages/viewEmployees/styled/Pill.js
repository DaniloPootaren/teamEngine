import styled from "styled-components";
import theme from "../../../components/styled/defaultTheme";



const Pill = styled.div`
  text-align: center;
  padding: 0.5em;
  color: #fff;
  border-radius: 1em;
  background-color: ${props =>
        props.status === 'ACTIVE' ?
            theme.colors.green : props.status === 'TERMINATED' ?
                theme.colors.danger : theme.colors.blue};
`;

export default Pill;
