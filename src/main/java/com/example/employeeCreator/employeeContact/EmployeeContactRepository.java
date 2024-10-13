package com.example.employeeCreator.employeeContact;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.employeeCreator.employee.Employee;

import java.util.Optional;

public interface EmployeeContactRepository extends JpaRepository<EmployeeContact, Long> {
    Optional<EmployeeContact> findByEmployee(Employee employee);
}
