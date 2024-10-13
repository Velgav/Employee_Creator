package com.example.employeeCreator.employeeStatus;

import jakarta.validation.constraints.NotNull;
import java.util.Date;

public class EmployeeStatusDTO {

    @NotNull
    private EmployeeType employeeType;

    private Date startDate;

    private Date finishDate;

    @NotNull
    private boolean isOngoing;

    @NotNull
    private boolean isPartTime;

    private Integer hours;

    // Getters and Setters
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
