import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { EmployeePayloadData, EmployeeResponseData } from '@/utils/schemas/EmployeeSchema';

//  GET ALL EMPLOYEES
export const getEmployeesAsync = createAsyncThunk('employees/getEmployees', async () => {
  const response = await axios.get('http://localhost:8080/api/employees');
  return response.data;
});

//  GET EMPLOYEE BY ID
export const getEmployeeByIdAsync = createAsyncThunk<EmployeeResponseData, string>(
  'employees/getElementById',
  async (id) => {
    const response = await axios.get(`http://localhost:8080/api/employees/${id}`);
    return response.data;
  }
);

// CREATE NEW EMPLOYEE
export const addEmployeeAsync = createAsyncThunk<EmployeeResponseData, EmployeePayloadData>(
  'employees/addEmployee',
  async (employeeData) => {
    const response = await axios.post('http://localhost:8080/api/employees', employeeData);
    return response.data;
  }
);

//  UPDATE EMPLOYEE
export const updateEmployeeAsync = createAsyncThunk<
  EmployeeResponseData,
  { id: string; employeeData: EmployeePayloadData }
>('employees/updateEmployee', async ({ id, employeeData }) => {
  const response = await axios.put(`http://localhost:8080/api/employees/${id}`, employeeData);
  return response.data;
});

//  DELETE EMPLOYEE
export const deleteEmployeeAsync = createAsyncThunk<number, number>(
  'employees/deleteEmployee',
  async (id) => {
    await axios.delete(`http://localhost:8080/api/employees/${id}`);
    return id;
  }
);
