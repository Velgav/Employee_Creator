package com.example.employeeCreator.employeeStatus;

import java.util.Date;

public class EmployeeStatusResponseDTO {
    private Long id;
    private EmployeeType employeeType;
    private Date startDate;
    private Date finishDate;
    private boolean isOngoing;
    private boolean isPartTime;
    private Integer hours;

    // Enum for EmployeeType
    public enum EmployeeType {
        PERMANENT, CONTRACT
    }

    // Constructors
    // public EmployeeStatusDTO() {}

    public EmployeeStatusResponseDTO(Long id, EmployeeType employeeType, Date startDate, Date finishDate,
            boolean isOngoing, boolean isPartTime, Integer hours) {
        this.id = id;
        this.employeeType = employeeType;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.isOngoing = isOngoing;
        this.isPartTime = isPartTime;
        this.hours = hours;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public EmployeeType getEmployeeType() {
        return employeeType;
    }

    public void setEmployeeType(EmployeeType employeeType) {
        this.employeeType = employeeType;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(Date finishDate) {
        this.finishDate = finishDate;
    }

    public boolean isOngoing() {
        return isOngoing;
    }

    public void setOngoing(boolean ongoing) {
        isOngoing = ongoing;
    }

    public boolean isPartTime() {
        return isPartTime;
    }

    public void setPartTime(boolean partTime) {
        isPartTime = partTime;
    }

    public Integer getHours() {
        return hours;
    }

    public void setHours(Integer hours) {
        this.hours = hours;
    }
}
