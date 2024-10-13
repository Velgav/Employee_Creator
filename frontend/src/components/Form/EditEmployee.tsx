import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Group,
  Notification,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  TextInput,
} from '@mantine/core';
import { addEmployee } from '../../store/employeeslice';

import './Profile.css';

const EditEmployee: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const employeeData = location.state || {};

  const [formData, setFormData] = useState({
    id: employeeData.id || null,
    firstName: employeeData.name?.split(' ')[0] || '',
    lastName: employeeData.name?.split(' ')[1] || '',
    gender: employeeData.gender || '',
    email: employeeData.email || '',
    mobile: employeeData.contact || '',
    address: employeeData.address || '',
    employeeType: employeeData.role || 'Permanent',
    startDate: '',
    finishDate: '',
    ongoing: false,
    employmentBasis: 'Full-time',
    hoursPerWeek: '12',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (location.state) {
      setFormData({
        id: employeeData.id || null,
        firstName: employeeData.name?.split(' ')[0] || '',
        lastName: employeeData.name?.split(' ')[1] || '',
        gender: employeeData.gender || '',
        email: employeeData.email || '',
        mobile: employeeData.contact || '',
        address: employeeData.address || '',
        employeeType: employeeData.role || 'Permanent',
        startDate: '',
        finishDate: '',
        ongoing: false,
        employmentBasis: 'Full-time',
        hoursPerWeek: '38',
      });
    }
  }, [location.state, employeeData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    // Narrow down the type when type is checkbox
    if (e.target instanceof HTMLInputElement && type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.gender ||
      !formData.email ||
      !formData.mobile
    ) {
      setError('Please fill in all required fields.');
      return;
    }

    setError('');

    const newEmployee = {
      id: formData.id,
      name: `${formData.firstName} ${formData.lastName}`,
      role: formData.employeeType,
      contact: formData.mobile,
      email: formData.email,
      gender: formData.gender,
      address: formData.address,
    };

    if (formData.id) {
      // dispatch(updateEmployee(newEmployee)); // Dispatch update action
    } else {
      dispatch(addEmployee(newEmployee)); // Dispatch add action
    }

    navigate('/'); // Redirect to the homepage after saving/updating
  };

  return (
    <form className="employeeForm" onSubmit={handleSubmit}>
      <h2>Personal Information</h2>
      {error && (
        <Notification
          className="note"
          color="red"
          title="Error"
          // disallowClose={false}
          onClose={() => setError("")}
        >
          {error}
        </Notification>
      )}
      <div className="form">
        <div className="formField">
          <TextInput
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="text-input"
          />
        </div>

        <div className="formField">
          <TextInput
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="text-input"
          />
        </div>
      </div>

      <div className="formField">
        <Select
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={(value) => setFormData({ ...formData, gender: value })}
          data={[
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' },
          ]}
          className="select-input"
        />
      </div>

      <h2>Contact Details</h2>
      <div className="formField">
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="text-input"
        />
      </div>

      <div className="formField">
        <TextInput
          label="Mobile Number"
          name="mobile"
          type="tel"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
          className="text-input"
        />
      </div>

      <div className="formField">
        <Textarea
          label="Residential Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
          className="textarea-input"
        />
      </div>

      <h2>Employee Status</h2>

      <div className="formField">
        <RadioGroup
          label="What is the employee type?"
          value={formData.employeeType}
          onChange={(value) => setFormData({ ...formData, employeeType: value })}
        >
          <Radio value="Permanent" label="Permanent" className="radioItems" />
          <Radio value="Contract" label="Contract" />
        </RadioGroup>
      </div>
      <div className="form">
        <div className="formField">
          <TextInput
            label="Start Date"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            className="date-input"
          />
        </div>

        <div className="formField">
          <TextInput
            label="Finish Date"
            name="finishDate"
            type="date"
            value={formData.finishDate}
            onChange={handleChange}
            disabled={formData.ongoing}
            className="date-input"
          />
        </div>
      </div>
      <div className="formField">
        <Checkbox
          label="Ongoing"
          name="ongoing"
          checked={formData.ongoing}
          onChange={handleChange}
        />
      </div>

      <div className="formField">
        <RadioGroup
          label="Employment Basis"
          value={formData.employmentBasis}
          onChange={(value) => setFormData({ ...formData, employmentBasis: value })}
        >
          <Radio value="Full-time" label="Full-time" className="radioItems" />
          <Radio value="Part-time" label="Part-time" />
        </RadioGroup>
      </div>

      <div className="formField">
        <Select
          label="Hours per Week"
          name="hoursPerWeek"
          value={formData.hoursPerWeek}
          onChange={() => setFormData({ ...formData })}
          data={[
            { value: '38', label: '38 hours' },
            { value: '24', label: '24 hours' },
            { value: '12', label: '12 hours' },
          ]}
          className="select-input"
        />
      </div>

      <Group mt="md" className="form-buttons">
        <Button type="submit">{formData.id ? 'Update' : 'Save'}</Button>
        <Button variant="outline" onClick={() => navigate('/')}>
          Cancel
        </Button>
      </Group>
    </form>
  );
};
export default EditEmployee;
