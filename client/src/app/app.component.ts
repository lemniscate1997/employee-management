import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  authRoutes = true;

  constructor(private router: Router) { }

  changeOfRoutes() {
    this.authRoutes = (this.router.url === '/login' || this.router.url === '/register');
  }
}
