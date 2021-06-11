import React from "react";
import { Formik } from "formik";
import { Flex } from "../../styled";
import FormField from "./FormField";
import FormButtons from "./FormButtons";
import FormDropdown from "./FormDropdown";
import employeeValidationSchema from "./schema";


const CreateEmployee = (props) => {
    const { handleSubmit, initialState } = props
    const defaultVal = {
        firstName: "",
        surname: "",
        email: "",
        age: "",
        status: "",
        jobTitle: "",
    }

    return (
        <>
            <Formik
                validationSchema={employeeValidationSchema}
                onSubmit={handleSubmit}
                initialValues={initialState ? initialState : defaultVal}
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

export default CreateEmployee;
