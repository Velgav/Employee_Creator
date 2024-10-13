package com.example.employeeCreator.employee;

import java.util.List;

import com.example.employeeCreator.employeeContact.EmployeeContactResponseDTO;
import com.example.employeeCreator.employeeStatus.EmployeeStatusResponseDTO;

public class EmployeeResponseDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String gender;
    private String department;
    private Double salary;
    private String position;
    private List<EmployeeContactResponseDTO> contacts; // Include contact details
    private EmployeeStatusResponseDTO status; // Include status details

    // Constructors
    // public EmployeeResponseDTO() {
    // }

    public EmployeeResponseDTO(Long id, String firstName, String lastName, String gender, String department,
            Double salary, String position, List<EmployeeContactResponseDTO> contacts,
            EmployeeStatusResponseDTO status) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.department = department;
        this.salary = salary;
        this.position = position;
        this.contacts = contacts;
        this.status = status;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public List<EmployeeContactResponseDTO> getContacts() {
        return contacts;
    }

    public void setContacts(List<EmployeeContactResponseDTO> contacts) {
        this.contacts = contacts;
    }

    public EmployeeStatusResponseDTO getStatus() {
        return status;
    }

    public void setStatus(EmployeeStatusResponseDTO status) {
        this.status = status;
    }
}
