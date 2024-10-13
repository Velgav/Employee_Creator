package com.example.employeeCreator.employeeContact;

public class EmployeeContactResponseDTO {
    private Long id;
    private String emailAddress;
    private String mobileNumber;
    private String address;

    // Constructors
    // public EmployeeContactResposeDTO() {}

    public EmployeeContactResponseDTO(Long id, String emailAddress, String mobileNumber, String address) {
        this.id = id;
        this.emailAddress = emailAddress;
        this.mobileNumber = mobileNumber;
        this.address = address;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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
