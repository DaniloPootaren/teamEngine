import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import Container from "../styled/Container";
import ButtonGroup from "../styled/ButtonGroup";
import { Flex } from "../../../components/styled";
import theme from "../../../components/styled/defaultTheme";
import Dialog from "../../../components/Dialog";
import EditForm from "../../../components/Forms/CreateEmployee";
import { editEmployeeDetails, deleteEmployee } from "../../../../redux/employees/actionCreators";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Pill from "../styled/Pill";
import { firstLetterCapital, removeUnderScores } from "../../../utils/text"




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
                <div>
                    <h3>{employee.id}</h3>
                </div>
                <ButtonGroup >
                    <FontAwesomeIcon size="2x" color={theme.colors.gray} onClick={() => setShowEditDialog(!showEditDialog)} icon={faEdit} />
                    <FontAwesomeIcon size="2x" color={theme.colors.gray} icon={faTrash} onClick={() => handleDelete(employee)} />
                </ButtonGroup>
            </Flex>
            {fields.map(field =>
                <span key={field}>
                    <strong>{`${firstLetterCapital(field)}: `}</strong>{employee[field]}<br />
                </span>)}
            <Flex alignItems="center" justifyContent="space-between">
                <span>
                    <strong>Job Title:</strong>{` ${employee.jobTitle}`}<br />
                </span>
                <Pill status={employee.status}>
                    {removeUnderScores(employee.status)}
                </Pill>
            </Flex>
            {showEditDialog && <Dialog
                header="Edit employee details"
                children={
                    <EditForm
                        initialState={employee}
                        handleCancel={() => setShowEditDialog(false)}
                        handleSubmit={submitForm}
                        cancelLabel="Cancel" />}
            />
            }
        </Container>
    );
};

export default Card;
