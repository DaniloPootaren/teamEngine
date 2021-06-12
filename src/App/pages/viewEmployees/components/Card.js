import React, { useState } from "react";
import Container from "../styled/Container"
import { Button, Flex, } from "../../../components/styled";
import ActionButtons from "./ActionButtons";




const Card = (props) => {
    // eslint-disable-next-line no-use-before-define
    const [showActionButton, setShowActionButton] = useState(showActionButton);
    const { employee } = props
    const fields = ['firstName', 'surname', 'email', 'age']

    return (
        <Container >
            <Flex alignItems="center" justifyContent="space-between">
                <div><h3>{employee.id}</h3></div>
                <Button data-cy="backButton" onClick={() => setShowActionButton(!showActionButton)}>
                    {!showActionButton ? 'Edit' : 'Cancel'}
                </Button>
            </Flex>
            {fields.map(field => <span key={field}><strong>{`${field}: `}</strong>{employee[field]}<br /></span>)}
            <Flex alignItems="center" justifyContent="space-between">
                <span><strong>Job Title:</strong>{` ${employee.jobTitle}`}<br /></span>
                <div>{employee.status}</div>
            </Flex>
            {showActionButton && <ActionButtons />}
        </Container>
    );
};

export default Card;
