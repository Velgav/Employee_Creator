package com.example.employeeCreator.employee;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import com.example.employeeCreator.employeeContact.EmployeeContactDTO;
import com.example.employeeCreator.employeeStatus.EmployeeStatusDTO;

public class EmployeeDTO {

    @NotBlank
    @Length(max = 50)
    private String firstName;

    @NotBlank
    @Length(max = 50)
    private String lastName;

    @NotNull
    private Employee.Gender gender;

    @Length(max = 100)
    private String department;

    private Double salary;

    @Length(max = 100)
    private String position;

    private EmployeeContactDTO contact;

    // For EmployeeStatus (OneToOne relationship)
    private EmployeeStatusDTO status;

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Employee.Gender getGender() {
        return gender;
    }

    public String getPosition() {
        return position;
    }

    public String getDepartment() {
        return department;
    }

    public Double getSalary() {
        return salary;
    }

    public EmployeeContactDTO getContact() {
        return contact;
    }

    public EmployeeStatusDTO getStatus() {
        return status;
    }
}
