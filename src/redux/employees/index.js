import { createSlice } from "@reduxjs/toolkit";


const defaultEmployee = {
  id: new Date().getTime(),
  firstName: "Abe",
  surname: "Simpson",
  email: "abe.simpson@example.com",
  age: 33,
  jobTitle: "Work grouch",
  status: "ACTIVE",
};

const initialState = {
  employees_records: [defaultEmployee],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    saveNewEmployee: {
      prepare: employee => ({
        payload: { ...employee, id: new Date().getTime() },
      }),
      reducer(draftState, action) {
        draftState.employees_records = draftState.employees_records.concat([action.payload]);
      },
    },
    editEmployeeDetails: {
      reducer(draftState, action) {
        draftState.employees_records = draftState.employees_records.map(emp => emp.id === action.payload.id ? action.payload : emp)
          ;
      },
    },
    deleteEmployee: {
      reducer(draftState, action) {
        const newEmployeeRecords = draftState.employees_records.filter(emp => emp.id !== action.payload.id)
        draftState.employees_records = newEmployeeRecords;
      },
    },
  },
});

export const { saveNewEmployee, editEmployeeDetails, deleteEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
