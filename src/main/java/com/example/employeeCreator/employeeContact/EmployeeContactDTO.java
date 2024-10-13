package com.example.employeeCreator.employeeContact;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class EmployeeContactDTO {

    @Email(message = "Email should be valid")
    @NotBlank(message = "Email is mandatory")
    private String emailAddress;

    @NotBlank(message = "Mobile number is mandatory")
    private String mobileNumber;

    private String address;

    // Getters and Setters
    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
