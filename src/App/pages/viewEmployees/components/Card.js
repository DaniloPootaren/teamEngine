import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux"
import Container from "../styled/Container"
import { Button, Flex, } from "../../../components/styled";
import Dialog from "../../../components/Dialog"
import EditForm from "../../../components/Forms/CreateEmployee"
import { editEmployeeDetails, deleteEmployee } from "../../../../redux/employees/actionCreators";




const Card = (props) => {
    // eslint-disable-next-line no-use-before-define
    const [showEditDialog, setShowEditDialog] = useState(false);
    const { employee } = props
    const fields = ['firstName', 'surname', 'email', 'age']

    const dispatch = useDispatch();

    const submitForm = useCallback(
        employee => {
            dispatch(editEmployeeDetails(employee));
        },
        [dispatch]
    );

    const handleDelete = useCallback(
        employee => {
            dispatch(deleteEmployee(employee));
        },
        [dispatch]
    );

    return (
        <Container  >
            <Flex alignItems="center" justifyContent="space-between">
                <div><h3>{employee.id}</h3></div>
                <Button data-cy="backButton" onClick={() => setShowEditDialog(!showEditDialog)}>
                    Edit
                </Button>
            </Flex>
            {fields.map(field =>
                <span key={field}>
                    <strong>{`${field}: `}</strong>{employee[field]}<br />
                </span>)}
            <Flex alignItems="center" justifyContent="space-between">
                <span>
                    <strong>Job Title:</strong>{` ${employee.jobTitle}`}<br />
                </span>
                <div>{employee.status}</div>
            </Flex>
            {showEditDialog && <Dialog
                header="Edit employee details"
                children={
                    <EditForm
                        initialState={employee}
                        handleCancel={() => setShowEditDialog(false)}
                        handleSubmit={submitForm}
                        cancelLabel="Cancel" />}
            />}
        </Container>
    );
};

export default Card;
