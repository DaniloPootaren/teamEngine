import React from "react";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { Box, Button, Flex, Header } from "../styled";

import { getEmployees } from "../../redux/global/selectors"

const View = () => {
  const history = useHistory();
  const employees = useSelector(getEmployees);

  return (
    <>
      <Header data-cy="header">View Employees</Header>
      <Flex direction="column" alignItems="center" justifyContent="center" marginTop="lg">
        <Box>
          {employees.map(employee => employee.firstName)}
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
