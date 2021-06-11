import React, { useCallback } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Flex } from "../styled";
import FormField from "./FormField";
import FormButtons from "./FormButtons";
import FormDropdown from "./FormDropdown";
import formValidationSchema from "../../schemas/employeeSchema";
import { saveNewEmployee } from "../../redux/employees/actionCreators";

const Edit = (props) => {
    const { employee } = props
    const dispatch = useDispatch();
    const submitForm = useCallback(
        employee => {
            dispatch(saveNewEmployee(employee));
        },
        [dispatch]
    );

    return (
        <>
            <Formik
                validationSchema={formValidationSchema}
                onSubmit={submitForm}
                initialValues={{
                    firstName: employee.firstName,
                    surname: employee.surname,
                    email: employee.email,
                    age: employee.age,
                    status: employee.status,
                    jobTitle: employee.jobTitle,
                }}
            >
                <Flex alignItems="center" justifyContent="center" height="100%">
                    <Flex alignItems="left" direction="column" width="300px">
                        <FormField name="firstName" placeholder="First name" />
                        <FormField name="surname" placeholder="Surname" />
                        <FormField name="email" placeholder="Email" />
                        <FormField name="age" placeholder="Age" />
                        <FormDropdown name="status" placeholder="-" />
                        <FormField name="jobTitle" placeholder="JobTitle" />
                        <FormButtons />
                    </Flex>
                </Flex>
            </Formik>
        </>
    );
};

export default Edit;
