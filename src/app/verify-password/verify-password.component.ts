import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-password',
  templateUrl: './verify-password.component.html',
  styleUrls: ['./verify-password.component.css']
})
export class VerifyPasswordComponent implements OnInit{

  registerForm!: FormGroup;

  constructor(
    //private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
   // private _toastService: ToastService,
   // private loader : LoadermodelService
  ) {}

  ngOnInit(): void {
  
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone_number: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      // Add other form controls if needed
    }, { 

      validator: passwordMismatch('password', 'confirmPassword')

    }
  );
  }

  get f() { return this.registerForm.controls; }

  onSubmitSignIn() {
    if (this.registerForm.invalid) {
      return;
    }

    // Call the API service to register the user
    this.authService.verifyPassword(this.registerForm.value).subscribe(
      (response: any) => {
        // Store the registration data and show it on the page
      //  this.registrationData = response;
        //this.showRegistrationData = true;
      },
      (error: any) => {
        console.error('Registration failed:', error);
      }
    );
  }


}


function passwordMismatch(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => { const control =
  formGroup.controls[controlName]; const matchingControl =
  formGroup.controls[matchingControlName]; if (matchingControl.errors &&
  !matchingControl.errors.passwordMismatch) { return; } if (control.value !==
  matchingControl.value) { matchingControl.setErrors({ passwordMismatch: true });
  } else { matchingControl.setErrors(null); } } }

