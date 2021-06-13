import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';

const ContentContainer = styled.div`
  margin: 2em;
  ${breakpoint('mobile', 'tablet')`
      height: 80vh;
      margin: none;
      `}
`;

export default ContentContainer