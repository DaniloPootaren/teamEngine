import * as actions from ".";

/* eslint-disable import/prefer-default-export */
export const saveNewEmployee = employee => dispatch => {
  dispatch(actions.saveNewEmployee(employee));
};

export const editEmployeeDetails = employee => dispatch => {
  dispatch(actions.editEmployeeDetails(employee));
};

export const deleteEmployee = employee => dispatch => {
  dispatch(actions.deleteEmployee(employee));
};

