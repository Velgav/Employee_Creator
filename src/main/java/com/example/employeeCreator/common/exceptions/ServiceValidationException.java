package com.example.employeeCreator.common.exceptions;

import com.example.employeeCreator.common.ValidationErrors;

public class ServiceValidationException extends Exception {
  private ValidationErrors errors;

  public ServiceValidationException(ValidationErrors errors) {
    this.errors = errors;
  }

  public ValidationErrors getErrors() {
    return errors;
  }
}
