import * as yup from "yup";

const formValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  surname: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  email: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .email("Invalid email address")
    .required("Required"),
  age: yup
    .number()
    .min(18, "You should be at least 18 to work.")
    .max(85, "Sorry you are too old.")
    .required("Required"),
  status: yup
    .mixed()
    .oneOf(
      ["Married", "Single", "Not disclosed"],
      " You should either be Married, Single or Not disclosed "
    )
    .required("Required"),
  jobTitle: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
});

export default formValidationSchema;
