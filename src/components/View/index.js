import React from "react";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { Box, Button, Flex, Header } from "../styled";

import { getEmployees } from "../../redux/global/selectors"

const View = () => {
  const history = useHistory();
  const rowData = useSelector(getEmployees);
  const columns = Object.keys(rowData[0])

  return (
    <>
      <Header data-cy="header">View Employees</Header>
      <Flex direction="column" alignItems="center" justifyContent="center" marginTop="lg">
        <Box>
          <div className="ag-theme-alpine" style={{ height: 400, width: '100vw' }}>

          </div>

        </Box>
        <Box>
          <Button data-cy="backButton" onClick={() => history.goBack()}>
            Back
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default View;
