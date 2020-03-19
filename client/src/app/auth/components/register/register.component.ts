import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { isNull } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  submitted = false;

  constructor(private fBuilder: FormBuilder, private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.registrationForm = this.fBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      contact: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]]
    });
  }

  get f() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }

    this.authService.register(this.registrationForm.value).subscribe(
      (response) => {
        if (!isNull(response.data)) {
          localStorage.setItem('user', JSON.stringify({ ...response.data, token: undefined }));
          localStorage.setItem('token', response.data.token);
          alert('Register sucessfully.')
          this.router.navigate(['/home']);
        } else if (!isNull(response.message)) {
          alert(response.message);
        }
      }
    )
  }

  signIn() {
    this.router.navigate(['/login']);
  }
}
