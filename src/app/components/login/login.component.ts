import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  //get f() { return this.loginForm.controls; }
  getFormControls() {
    return this.loginForm.controls;
  }
  login() {
    this.authService.login(
      {
        username: this.getFormControls()['username'].value,
        password: this.getFormControls()['password'].value
      }
    )
    .subscribe((success: any) => {
      if (success) {
        this.router.navigate(['/users']);
      }
    }),
    (error: any) => {
      console.log(error);
    }
    this.loginForm.reset();

  }
  
}
