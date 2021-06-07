import React from "react";
import { useFormikContext } from "formik";
import Select from "./styled/Select";
import ErrorMessage from "./styled/ErrorMessage";
import { Box } from "../styled";

const FormDropdown = ({ name, placeholder }) => {
    const { errors, touched, values, handleChange, handleBlur } = useFormikContext();
    const statuses = ['ACTIVE', 'LEAVE_OF_ABSENCE', 'TERMINATED']
    const transformText = text => text.toLowerCase().replace(/_/g, ' ')

    return (
        <Box marginBottom="md">
            <Select
                name={name}
                value={values.status}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ display: 'block' }}
            >
                <option value="" disabled >{placeholder}</option>
                {statuses.map(status => <option key={status} value={status} label={transformText(status)} />)}
            </Select>

            {errors[name] && touched[name] && (
                <ErrorMessage data-cy={`${name}ErrorMessage`}>{errors[name]}</ErrorMessage>
            )}
        </Box>
    );
};

export default FormDropdown;
