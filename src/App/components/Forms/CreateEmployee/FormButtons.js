import React from "react";
import { useHistory } from "react-router";
import { useFormikContext } from "formik";
import * as _ from "lodash"
import { Box, Button, Flex } from "../../styled";


const FormButtons = () => {
  const { handleSubmit, errors } = useFormikContext();
  const history = useHistory();
  const disableSave = !_.isEmpty(errors)

  return (
    <Flex justifyContent="center">
      <Box marginRight="sm">
        <Button data-cy="backButton" onClick={() => history.goBack()}>
          Back
        </Button>
      </Box>
      <Box>
        <Button data-cy="saveButton" onClick={handleSubmit} disabled={disableSave} type="submit">
          Save
        </Button>
      </Box>
    </Flex>
  );
};

export default FormButtons;
