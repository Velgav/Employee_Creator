package com.example.employeeCreator.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employeeCreator.employeeContact.EmployeeContact;
import com.example.employeeCreator.employeeContact.EmployeeContactDTO;
import com.example.employeeCreator.employeeContact.EmployeeContactRepository;
import com.example.employeeCreator.employeeStatus.EmployeeStatus;
import com.example.employeeCreator.employeeStatus.EmployeeStatusDTO;
import com.example.employeeCreator.employeeStatus.EmployeeStatusRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private EmployeeContactRepository employeeContactRepository;

    @Autowired
    private EmployeeStatusRepository employeeStatusRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    public Employee createEmployee(EmployeeDTO employeeDTO) {

        // CREATE EMPLOYEE
        Employee employee = new Employee();
        employee.setFirstName(employeeDTO.getFirstName());
        employee.setLastName(employeeDTO.getLastName());
        employee.setGender(employeeDTO.getGender());
        employee.setDepartment(employeeDTO.getDepartment());
        employee.setSalary(employeeDTO.getSalary());
        employee.setPosition(employeeDTO.getPosition());

        employee = employeeRepository.save(employee);

        // CREATE EMPLOYEE CONTACT
        EmployeeContactDTO contactDTO = employeeDTO.getContact();
        EmployeeContact contact = new EmployeeContact();
        contact.setEmployee(employee);
        contact.setEmailAddress(contactDTO.getEmailAddress());
        contact.setMobileNumber(contactDTO.getMobileNumber());
        contact.setAddress(contactDTO.getAddress());

        employeeContactRepository.save(contact);

        // CREATE EMPLOYEE STATUS
        EmployeeStatusDTO statusDTO = employeeDTO.getStatus();
        if (statusDTO != null) {
            EmployeeStatus status = new EmployeeStatus();
            status.setEmployee(employee);
            status.setEmployeeType(statusDTO.getEmployeeType());
            status.setStartDate(statusDTO.getStartDate());
            status.setFinishDate(statusDTO.getFinishDate());
            status.setOngoing(statusDTO.isOngoing());
            status.setPartTime(statusDTO.isPartTime());
            status.setHours(statusDTO.getHours());

            employeeStatusRepository.save(status);
        }

        return employee;
    }

    public Optional<Employee> updateEmployee(Long id, EmployeeDTO employeeDetails) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setGender(employeeDetails.getGender());
        employee.setDepartment(employeeDetails.getDepartment());
        employee.setSalary(employeeDetails.getSalary());
        employee.setPosition(employeeDetails.getPosition());

        EmployeeContactDTO contactDTO = employeeDetails.getContact();
        if (contactDTO != null) {
            EmployeeContact contact = employeeContactRepository.findByEmployee(employee)
                    .orElse(new EmployeeContact()); // Find existing contact or create a new one if not found
            contact.setEmployee(employee);
            contact.setEmailAddress(contactDTO.getEmailAddress());
            contact.setMobileNumber(contactDTO.getMobileNumber());
            contact.setAddress(contactDTO.getAddress());

            employeeContactRepository.save(contact);
        }
        // Update employee status information
        EmployeeStatusDTO statusDTO = employeeDetails.getStatus();
        if (statusDTO != null) {
            EmployeeStatus status = employeeStatusRepository.findByEmployee(employee)
                    .orElse(new EmployeeStatus()); // Find existing status or create a new one if not found
            status.setEmployee(employee);
            status.setEmployeeType(statusDTO.getEmployeeType());
            status.setStartDate(statusDTO.getStartDate());
            status.setFinishDate(statusDTO.getFinishDate());
            status.setOngoing(statusDTO.isOngoing());
            status.setPartTime(statusDTO.isPartTime());
            status.setHours(statusDTO.getHours());

            employeeStatusRepository.save(status);
        }

        // Save the updated employee and return it
        return Optional.of(employeeRepository.save(employee));
    }

    public boolean deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
        return true;
    }
}
