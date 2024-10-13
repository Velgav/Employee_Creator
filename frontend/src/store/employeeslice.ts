import { createSlice } from '@reduxjs/toolkit';
import {
  EmployeeData,
  EmployeeFormData,
  EmployeeResponseData,
} from '@/utils/schemas/EmployeeSchema';
import {
  addEmployeeAsync,
  deleteEmployeeAsync,
  getEmployeeByIdAsync,
  getEmployeesAsync,
  updateEmployeeAsync,
} from './async';

interface EmployeeState {
  isLoading: boolean;
  employees: EmployeeData[];
  error: boolean;
  employeeDetail: EmployeeFormData | null;
}

// Initial employee state
const initialState: EmployeeState = {
  isLoading: false,
  error: false,
  employees: [],
  employeeDetail: null,
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push({
        ...action.payload,
        id: state.employees.length + 1,
      });
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter((employee) => employee.id !== action.payload);
    },
    clearEmployeeDetail: (state) => {
      state.employeeDetail = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEmployeesAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEmployeesAsync.fulfilled, (state, action) => {
        const allEmployees = action.payload || [];
        state.employees = allEmployees.map((emp: EmployeeResponseData) => {
          const employee = { ...emp, contact: emp.contacts[0], contacts: undefined };
          return employee;
        });
        state.isLoading = false;
      })
      .addCase(getEmployeesAsync.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addEmployeeAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addEmployeeAsync.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addEmployeeAsync.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getEmployeeByIdAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEmployeeByIdAsync.fulfilled, (state, action) => {
        const empDetail: EmployeeResponseData = action.payload;
        const contactDetail = empDetail.contacts[0];
        const statusDetail = empDetail.status;
        state.employeeDetail = {
          ...empDetail,
          ...contactDetail,
          ...statusDetail,
        };
        state.isLoading = false;
      })
      .addCase(getEmployeeByIdAsync.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateEmployeeAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEmployeeAsync.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateEmployeeAsync.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteEmployeeAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEmployeeAsync.fulfilled, (state, action) => {
        state.employees = state.employees.filter((employee) => employee.id !== action.payload);
        state.isLoading = false;
      })
      .addCase(deleteEmployeeAsync.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

// Export the actions
export const { addEmployee, clearEmployeeDetail, deleteEmployee } = employeeSlice.actions;

// Export the reducer
export default employeeSlice.reducer;
