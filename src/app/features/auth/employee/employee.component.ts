import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  Form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.Form = new FormGroup(
      {
        userName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        phoneNumber: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      this.passwordMatchingValidator
    );
  }

  // Validation function for Matching Password and Confirm Password - Mudasir Ali
  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value == fg.get('confirmPassword').value
      ? null
      : { notMatched: true };
  }

  // Get Methods of FormControls - Mudasir Ali
  get UserName() {
    return this.Form.get('userName') as FormControl;
  }

  get FirstName() {
    return this.Form.get('firstName') as FormControl;
  }

  get LastName() {
    return this.Form.get('lastName') as FormControl;
  }

  get Email() {
    return this.Form.get('email') as FormControl;
  }

  get PhoneNumber() {
    return this.Form.get('phoneNumber') as FormControl;
  }

  get Password() {
    return this.Form.get('password') as FormControl;
  }

  get ConfirmPassword() {
    return this.Form.get('confirmPassword') as FormControl;
  }

  onSubmit() {
    if (this.Form.invalid) {
    } else {
    }
  }
}
