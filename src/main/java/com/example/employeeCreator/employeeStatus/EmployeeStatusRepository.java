package com.example.employeeCreator.employeeStatus;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.employeeCreator.employee.Employee;

import java.util.Optional;

public interface EmployeeStatusRepository extends JpaRepository<EmployeeStatus, Long> {
    Optional<EmployeeStatus> findByEmployee(Employee employee);

}
