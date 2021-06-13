import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import { Box, Button, Flex, Header } from "../../components/styled";
import Card from "./components/Card"
import Content from "./styled/Content"
import InfiniteScroller from "../../components/InfiniteScroller"
import { getEmployees } from "../../../redux/global/selectors"
import { loadEmployees } from "../../../redux/employees/actionCreators";
import { loadMoreEmp } from "./mocks/api"



const ViewEmployees = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const employees = useSelector(getEmployees);
  const [pageNumber, setPageNumber] = useState(1);

  const loadMore = () => {
    setPageNumber(pageNumber + 1)
  }

  useEffect(() => {
    dispatch(loadEmployees(loadMoreEmp(pageNumber, 10).data));
  }, [dispatch, pageNumber])


  return (
    <>
      <>
        <Button data-cy="backButton" onClick={() => history.goBack()}>
          Back
          </Button>
      </>
      <Header data-cy="header">View Employees</Header>
      <Content>
        <InfiniteScroller callback={() => loadMore()}>
          <Box>
            {employees.map(employee => <Card key={employee.id} employee={employee} />)}
          </Box>
        </InfiniteScroller>
      </Content>

    </>
  );
};

export default ViewEmployees;
