import { toast } from 'react-toastify';
import * as actions from ".";


/* eslint-disable import/prefer-default-export */
export const saveNewEmployee = employee => dispatch => {
  dispatch(actions.saveNewEmployee(employee));
  toast("Employee created.", { type: "success" })
};

export const editEmployeeDetails = employee => dispatch => {
  dispatch(actions.editEmployeeDetails(employee));
  toast("Employee updated.", { type: "success" })
};

export const deleteEmployee = employee => dispatch => {
  dispatch(actions.deleteEmployee(employee));
  toast("Employee deleted.", { type: "success" })
};

export const loadEmployees = employees => dispatch => {
  dispatch(actions.loadMoreEmp(employees));
};


