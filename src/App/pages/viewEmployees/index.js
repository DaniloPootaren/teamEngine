import React from "react";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { Box, Button, Flex, Header } from "../../components/styled";
import Card from "./components/Card"
import { getEmployees } from "../../../redux/global/selectors"

const ViewEmployees = () => {
  const history = useHistory();
  const employees = useSelector(getEmployees);


  return (
    <>
      <Header data-cy="header">View Employees</Header>
      <Flex direction="column" alignItems="center" justifyContent="center" marginTop="lg">
        <Box>
          {employees.map(employee => <Card key={employee.id} employee={employee} />)}
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

export default ViewEmployees;
