import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import theme from "../styled/defaultTheme";
import Dialog from "../Dialog";
import { Flex, Button } from "../../components/styled";
import ActionButtons from "./styled/ActionButtons"

const YesNoDialog = (props) => {
    const {
        onConfirm,
        onCancel
    } = props

    return <Dialog
        header="Do you want to proceed?"
        children={
            <Flex justifyContent="center" alignItems="center" direction="column">
                <FontAwesomeIcon size="4x" color={theme.colors.gray} icon={faInfoCircle} />
                <h4>This action cannot be undone.</h4>
                <ActionButtons>
                    <Button data-cy="deleteEmployee" onClick={onConfirm} secondary>Yes</Button>
                    <Button onClick={onCancel}>No</Button>
                </ActionButtons>
            </Flex>
        }
    />
}

export default YesNoDialog;
