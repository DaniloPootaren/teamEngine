import React from "react";

import { useFormikContext } from "formik";
import * as _ from "lodash"
import { Box, Button, Flex } from "../../styled";


const FormButtons = (props) => {
  const { handleSubmit, errors } = useFormikContext();
  const { handleCancel, cancelLabel } = props;
  const disableSave = !_.isEmpty(errors)

  return (
    <Flex justifyContent="center">
      <Box marginRight="sm">
        <Button data-cy="backButton" onClick={handleCancel}>
          {cancelLabel}
        </Button>
      </Box>
      <Box>
        <Button secondary data-cy="saveButton" onClick={handleSubmit} disabled={disableSave} type="submit">
          Save
        </Button>
      </Box>
    </Flex>
  );
};

export default FormButtons;
