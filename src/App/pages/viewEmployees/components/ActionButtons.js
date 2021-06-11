import React from "react";
import { Button } from "../../../components/styled";
import ButtonGroup from "../styled/ButtonGroup";


const ActionButtons = () => {

    return (
        <ButtonGroup alignItems="center" >
            <Button data-cy="backButton" onClick={() => alert('editing mode')} secondary >
                Save
                </Button>
        </ButtonGroup>
    );
};

export default ActionButtons;
