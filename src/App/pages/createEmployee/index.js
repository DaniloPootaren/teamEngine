import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../../components/styled";
import { saveNewEmployee } from "../../../redux/employees/actionCreators";
import CreateEmployeeForm from "../../components/Forms/CreateEmployee"

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const submitForm = useCallback(
    employee => {
      dispatch(saveNewEmployee(employee));
    },
    [dispatch]
  );

  return (
    <>
      <Header>CreateEmployee new employee</Header>
      <CreateEmployeeForm handleSubmit={submitForm} />
    </>
  );
};

export default CreateEmployee;
