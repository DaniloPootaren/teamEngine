import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Header } from "../../components/styled";
import { saveNewEmployee } from "../../../redux/employees/actionCreators";
import CreateEmployeeForm from "../../components/Forms/CreateEmployee"

const CreateEmployee = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const submitForm = useCallback(
    employee => {
      dispatch(saveNewEmployee(employee));
    },
    [dispatch]
  );

  const handleBackButton = () => {
    history.goBack()
  }

  return (
    <>
      <Header>Create new employee</Header>
      <CreateEmployeeForm handleSubmit={submitForm} cancelLabel="Back" handleCancel={handleBackButton} />
    </>
  );
};

export default CreateEmployee;
