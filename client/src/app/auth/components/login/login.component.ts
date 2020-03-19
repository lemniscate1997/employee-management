import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { isNull } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('firstelm', null) elementRef: ElementRef;

  loginForm: FormGroup;
  submitted = false;

  constructor(private fBuilder: FormBuilder, private authService: AuthenticationService, private router: Router) {
    if (!isNull(this.authService.getToken())) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.loginForm = this.fBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.elementRef.nativeElement.focus();
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        if (!isNull(response.data)) {
          localStorage.setItem('user', JSON.stringify({ ...response.data, token: undefined }));
          localStorage.setItem('token', response.data.token);
          this.router.navigate(['/home']);
        } else if (!isNull(response.message)) {
          alert(response.message);
        }
      }
    )
  }

  signUp() {
    this.router.navigate(['/register']);
  }
}
