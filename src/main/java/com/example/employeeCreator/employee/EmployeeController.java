package com.example.employeeCreator.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.employeeCreator.common.exceptions.NotFoundException;

import java.util.List;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> employees = employeeService.getAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    //Get employee by ID
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) throws NotFoundException {
        Employee employee = employeeService.getEmployeeById(id)
                .orElseThrow(() -> new NotFoundException("Could not find employee with id " +
                        id));
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    // Create a new employee
    @PostMapping
    public ResponseEntity<Employee> createEmployee(@Valid @RequestBody EmployeeDTO employeeDTO) {
        Employee createdEmployee = employeeService.createEmployee(employeeDTO);
        return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
    }

    // Update an existing employee
    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @Valid @RequestBody EmployeeDTO employeeDTO)
            throws NotFoundException {
        Employee updatedEmployee = employeeService.updateEmployee(id, employeeDTO)
                .orElseThrow(() -> new NotFoundException("Could not find employee with id " +
                        id));
        return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
    }

    //Delete an employee by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id) throws NotFoundException {
        boolean deleteSuccessful = employeeService.deleteEmployee(id);
        if (!deleteSuccessful) {
            throw new NotFoundException("Could not find employee with id " + id);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
