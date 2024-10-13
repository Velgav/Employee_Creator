import CustomLoader from "@/components/elements/CustomLoader";
import EmployeeForm from "@/components/Form/EmployeeForm"
import { addEmployeeAsync, getEmployeeByIdAsync, updateEmployeeAsync } from "@/store/async";
import { clearEmployeeDetail } from "@/store/employeeslice";
import { AppDispatch, RootState } from "@/store/store";
import { EmployeeFormData, EmployeePayloadData } from "@/utils/schemas/EmployeeSchema";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EmployeeFormPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const { id } = useParams(); // Retrieve the employee ID from the URL
    const employeeDetail = useSelector((state: RootState) => state.employees.employeeDetail || []);
    const isLoading = useSelector((state: RootState) => state.employees.isLoading);

    const handleSubmitForm = (data: EmployeeFormData) => {
        const employeePayload: EmployeePayloadData = {
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            department: data.department,
            salary: data.salary,
            position: data.position,
            contact: {
                emailAddress: data.emailAddress,
                mobileNumber: data.mobileNumber,
                address: data.address,
            },
            status: {
                employeeType: data.employeeType,
                startDate: data.startDate,
                finishDate: data.finishDate,
                isOngoing: data.isOngoing,
                isPartTime: data.isPartTime,
                hours: data.hours,
            }
        }

        if (id) {
            //  update employee code goes here
            dispatch(updateEmployeeAsync({ id, employeeData: employeePayload }))
        } else {
            dispatch(addEmployeeAsync(employeePayload));

        }
    }

    useEffect(() => {
        if (id && id !== null) {
            dispatch(getEmployeeByIdAsync(id));
        }

    }, [id])

    useEffect(() => {
        return () => {
            console.log('clearing emp detail');
            dispatch(clearEmployeeDetail());
        }
    }, [])

    console.log('user', id, employeeDetail);

    if (isLoading) {
        return (
            <CustomLoader />
        )
    }

    return (
        <EmployeeForm employee={employeeDetail} onSubmit={data => {
            console.log('submitting data', data);
            handleSubmitForm(data);
        }} />
    )
}

export default EmployeeFormPage;