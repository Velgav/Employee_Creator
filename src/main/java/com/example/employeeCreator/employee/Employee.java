package com.example.employeeCreator.employee;

import com.example.employeeCreator.common.BaseEntity;
import com.example.employeeCreator.employeeContact.EmployeeContact;
import com.example.employeeCreator.employeeStatus.EmployeeStatus;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name = "employees")
public class Employee extends BaseEntity {

    public enum Gender {
        MALE, FEMALE, OTHER
    }

    // Constructor with id, name, and position
    public Employee(String firstName, String lastName, Gender gender, String department, Double salary,
            String position) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.department = department;
        this.salary = salary;
        this.position = position;
    }

    // Default constructor
    public Employee() {
    }

    @NotBlank(message = "First name is mandatory")
    @Size(max = 50)
    @Column(name = "first_name", nullable = false)
    private String firstName;

    @NotBlank(message = "Last name is mandatory")
    @Size(max = 50)
    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender")
    private Gender gender;

    @Size(max = 100)
    @Column(name = "department")
    private String department;

    @Column(name = "salary")
    private Double salary;

    @Size(max = 100)
    @Column(name = "position") // New field
    private String position;

    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<EmployeeContact> contacts;

    @OneToOne(mappedBy = "employee", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private EmployeeStatus status;

    // Getters and Setters
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

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public List<EmployeeContact> getContacts() {
        return contacts;
    }

    public void setContacts(List<EmployeeContact> contacts) {
        this.contacts = contacts;
    }

    public EmployeeStatus getStatus() {
        return status;
    }

    public void setStatus(EmployeeStatus status) {
        this.status = status;
    }

    public Double getSalary() {
        return this.salary;
    }

    public String getDepartment() {
        return this.department;
    }

    public String getPosition() {
        return this.position;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

}
