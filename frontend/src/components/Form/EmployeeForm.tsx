import React from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Button,
    Checkbox,
    Group,
    // Notification,
    NumberInput,
    Radio,
    RadioGroup,
    Select,
    Textarea,
    TextInput,
} from '@mantine/core';
import './Profile.scss';
import { useForm } from 'react-hook-form';
import { EmployeeFormData, EmployeeFormSchema } from '@/utils/schemas/EmployeeSchema';

interface EmployeeFormProps {
    onSubmit: (data: EmployeeFormData) => void;
    employee: EmployeeFormData;
}


const EmployeeForm: React.FC<EmployeeFormProps> = ({ onSubmit, employee }) => {
    const navigate = useNavigate();

    const { reset, register, setValue, formState: { isSubmitSuccessful, errors }, handleSubmit } = useForm<EmployeeFormData>({
        resolver: zodResolver(EmployeeFormSchema), defaultValues: { ...employee }
    });

    if (isSubmitSuccessful) {
        reset();
    }

    console.log('errors', errors);


    return (
        <form className="employeeForm" onSubmit={handleSubmit(onSubmit)}>
            <h2>Employee Information</h2>
            {/* {errors && (
                <Notification
                    className="note"
                    color="red"
                    title="Error"
                    onClose={() => reset()}
                >
                    Error updating form
                </Notification>
            )} */}
            <div className="form">
                <div className="formField">
                    <TextInput
                        label="First Name"
                        {...register('firstName')}
                        placeholder="First Name"
                        className="text-input"
                    />
                </div>

                <div className="formField">
                    <TextInput
                        label="Last Name"
                        {...register('lastName')}
                        placeholder="Last Name"
                        className="text-input"
                    />
                </div>
            </div>

            <div className="formField">
                <Select
                    label="Gender"
                    className="select-input"
                    defaultValue="MALE"
                    data={[
                        { value: 'MALE', label: 'Male' },
                        { value: 'FEMALE', label: 'Female' },
                        { value: 'OTHER', label: 'Other' },
                    ]}
                    onChange={(value: string | null) => {
                        if (value !== null) {
                            setValue('gender', value);
                        } else {
                            setValue('gender', 'MALE');
                        }
                    }} />
            </div>

            <div className="formField">
                <TextInput
                    label="Department"
                    {...register('department')}
                    placeholder="Department"
                    className="text-input"
                />
            </div>

            <div className="formField">
                <TextInput
                    label="Role"
                    {...register('position')}
                    placeholder="Role"
                    className="text-input"
                />
            </div>

            <div className="formField">
                <NumberInput
                    label="Salary"
                    description="Employee Salary ?"
                    placeholder="Salary"
                    onChange={(value) => {
                        if (typeof value === 'number' && !isNaN(value)) {
                            setValue('salary', value); // Set value as a number
                        } else {
                            setValue('salary', undefined); // Handle case if value is not a number
                        }
                    }}
                    defaultValue={20000}
                    allowNegative={false}
                />
            </div>

            <h2>Contact Details</h2>
            <div className="formField">
                <TextInput
                    label="Email Address"
                    type="email"
                    {...register('emailAddress')}
                    placeholder="Enter email"
                    className="text-input"
                />
            </div>

            <div className="formField">
                <TextInput
                    label="Mobile Number"
                    type="tel"
                    {...register('mobileNumber')}
                    placeholder="Mobile Number"
                    className="text-input"
                />
            </div>

            <div className="formField">
                <Textarea
                    label="Residential Address"
                    {...register('address')}
                    placeholder="Enter your address"
                    className="textarea-input"
                />
            </div>

            <h2>Employee Status</h2>

            <div className="formField">
                <RadioGroup
                    label="What is the employee type?"
                    onChange={(value: string) => setValue('employeeType', value)}
                >
                    <Radio value="PERMANENT" label="Permanent" className="radioItems" />
                    <Radio value="CONTRACT" label="Contract" />
                </RadioGroup>
            </div>
            <div className="form">
                <div className="formField">
                    <TextInput
                        label="Start Date"
                        type="date"
                        onChange={(event) => {
                            const dateValue = event.currentTarget.value; // Get the value from the event
                            const dateObj = new Date(dateValue); // Convert to Date object
                            const timestamp = dateObj.getTime(); // Get the timestamp (milliseconds since Unix epoch)

                            setValue('startDate', timestamp); // Save the timestamp to the form state
                        }}
                        className="date-input"
                    />
                </div>

                <div className="formField">
                    <TextInput
                        label="Finish Date"
                        type="date"
                        onChange={(event) => {
                            const dateValue = event.currentTarget.value; // Get the value from the event
                            const dateObj = new Date(dateValue); // Convert to Date object
                            const timestamp = dateObj.getTime(); // Get the timestamp (milliseconds since Unix epoch)

                            setValue('finishDate', timestamp); // Save the timestamp to the form state
                        }}
                        className="date-input"
                    />
                </div>
            </div>
            <div className="formField">
                <Checkbox
                    label="Ongoing"
                    {...register('isOngoing')}
                />
            </div>

            <div className="formField">
                <RadioGroup
                    label="Employment Basis"
                    onChange={(value: string) => {
                        const isPartTimeValue = value === 'Part-time';
                        setValue('isPartTime', isPartTimeValue)
                    }}

                >
                    <Radio value="Full-time" label="Full-time" className="radioItems" />
                    <Radio value="Part-time" label="Part-time" />
                </RadioGroup>
            </div>

            <div className="formField">
                <NumberInput
                    label="Hours Per Week"
                    description="Hours working per week"
                    placeholder="Hours"
                    onChange={(value) => {
                        if (typeof value === 'number' && !isNaN(value)) {
                            setValue('hours', value); // Set value as a number
                        } else {
                            setValue('hours', undefined); // Handle case if value is not a number
                        }
                    }}
                    defaultValue={20}
                    allowNegative={false}
                />
            </div>

            <Group mt="md" className="form-buttons">
                {/* <Button type="submit">{formData.id ? 'Update' : 'Save'}</Button> */}
                <Button type="submit" onClick={handleSubmit(onSubmit)} >Save</Button>
                <Button variant="outline" onClick={() => navigate('/')}>
                    Cancel
                </Button>
            </Group>
        </form>
    );
};
export default EmployeeForm;
