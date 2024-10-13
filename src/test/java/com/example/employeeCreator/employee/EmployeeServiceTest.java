package com.example.employeeCreator.employee;

// import com.example.employeeTest.employeeContact.EmployeeContact;
// import com.example.employeeTest.employeeStatus.EmployeeStatus;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.employeeCreator.common.exceptions.NotFoundException;
import com.example.employeeCreator.employee.Employee;
import com.example.employeeCreator.employee.EmployeeRepository;
import com.example.employeeCreator.employee.EmployeeService;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class EmployeeServiceTest {

    @Mock
    private EmployeeRepository employeeRepository;

    @InjectMocks
    private EmployeeService employeeService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllEmployees() {
        // Arrange
        List<Employee> mockEmployees = List.of(
                new Employee("John", "Doe", Employee.Gender.MALE, "IT", 50000.0, "Developer"));
        when(employeeRepository.findAll()).thenReturn(mockEmployees);

        // Act
        List<Employee> result = employeeService.getAllEmployees();

        // Assert
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("John", result.get(0).getFirstName());
        verify(employeeRepository, times(1)).findAll();
    }

    // @Test
    // public void testGetEmployeeById_Found() throws NotFoundException {
    //     // Arrange
    //     Employee mockEmployee = new Employee("Jane", "Smith", Employee.Gender.FEMALE, "HR", 60000.0, "Manager");
    //     when(employeeRepository.findById(1L)).thenReturn(Optional.of(mockEmployee));

    //     // Act
    //     Optional<Employee> result = employeeService.getEmployeeById(1L);

    //     // Assert
    //     assertTrue(result.isPresent());
    //     assertEquals("Jane", result.get().getFirstName());
    //     verify(employeeRepository, times(1)).findById(1L);
    // }

    // @Test
    // public void testGetEmployeeById_NotFound() {
    //     // Arrange
    //     when(employeeRepository.findById(1L)).thenReturn(Optional.empty());

    //     // Act & Assert
    //     assertThrows(NotFoundException.class, () -> employeeService.getEmployeeById(1L));
    //     verify(employeeRepository, times(1)).findById(1L);
    // }

    // @Test
    // public void testCreateEmployee() {
    //     // Arrange
    //     EmployeeDTO employeeDTO = new EmployeeDTO("John", "Doe", Employee.Gender.MALE, "IT", 50000.0, "Developer");
    //     Employee employee = new Employee("John", "Doe", Employee.Gender.MALE, "IT", 50000.0, "Developer");
    //     when(employeeRepository.save(any(Employee.class))).thenReturn(employee);

    //     // Act
    //     Employee result = employeeService.createEmployee(employeeDTO);

    //     // Assert
    //     assertNotNull(result);
    //     assertEquals("John", result.getFirstName());
    //     verify(employeeRepository, times(1)).save(any(Employee.class));
    // }

    // @Test
    // public void testUpdateEmployee_Success() throws NotFoundException {
    //     // Arrange
    //     Employee existingEmployee = new Employee("John", "Doe", Employee.Gender.MALE, "IT", 50000.0, "Developer");
    //     EmployeeDTO updatedEmployeeDTO = new EmployeeDTO("Jane", "Smith", Employee.Gender.FEMALE, "HR", 60000.0,
    //             "Manager");

    //     when(employeeRepository.findById(1L)).thenReturn(Optional.of(existingEmployee));
    //     when(employeeRepository.save(any(Employee.class))).thenReturn(existingEmployee);

    //     // Act
    //     Optional<Employee> result = employeeService.updateEmployee(1L, updatedEmployeeDTO);

    //     // Assert
    //     assertTrue(result.isPresent());
    //     assertEquals("Jane", result.get().getFirstName());
    //     verify(employeeRepository, times(1)).findById(1L);
    //     verify(employeeRepository, times(1)).save(any(Employee.class));
    // }

    // @Test
    // public void testDeleteEmployee_Success() throws NotFoundException {
    //     // Arrange
    //     Employee mockEmployee = new Employee("John", "Doe", Employee.Gender.MALE, "IT", 50000.0, "Developer");
    //     when(employeeRepository.findById(1L)).thenReturn(Optional.of(mockEmployee));
    //     doNothing().when(employeeRepository).delete(mockEmployee);

    //     // Act
    //     boolean result = employeeService.deleteEmployee(1L);

    //     // Assert
    //     assertTrue(result);
    //     verify(employeeRepository, times(1)).findById(1L);
    //     verify(employeeRepository, times(1)).delete(mockEmployee);
    // }

    // @Test
    // public void testDeleteEmployee_NotFound() {
    //     // Arrange
    //     when(employeeRepository.findById(1L)).thenReturn(Optional.empty());

    //     // Act & Assert
    //     assertThrows(NotFoundException.class, () -> employeeService.deleteEmployee(1L));
    //     verify(employeeRepository, times(1)).findById(1L);
    // }
}
