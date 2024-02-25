import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { AuthService } from 'src/app/services/auth.service';
import { LoadermodelService } from 'src/app/services/loadermodel.service';
import { environment } from 'src/environment/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {

    if (this.authService.isLoggedIn())
      this.router.navigate(['/dashboard']);
  }

  userData:any={
    accountNumber: '', password:''
  }


  login() {
    console.log(this.userData);
    
  }

  onSubmit(): void {
    if (this.userData) {
      const { accountNumber, password } = this.userData;
      //this.loader.show("Logging...");
      this.authService.login(accountNumber, password).subscribe(
        (response: any) => {
          // Handle successful login here
          // Save the token from the response if needed
          console.log(response);
          // this._toastService.success('Account LoggedIn');
          const token = response.token;
          console.log(token);
          localStorage.setItem("authToken", token);
          //this.loader.hide(); // Hide the loader on successful login
          this.router.navigate(['/dashboard']);
          // Redirect to the desired page or perform any other action
        },
        (error: any) => {
          // Handle login failure here
          //this._toastService.error('Invalid Credentials');
          console.error('Login error:', error);
          //this.loader.hide(); // Hide the loader on login error
        }
      );
    }
  }

}



