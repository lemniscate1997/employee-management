import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() authRoute: Boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(route = '') {
    this.router.navigate([`/${route}`]);
  }

  logout() {
    localStorage.clear();
    this.navigateTo('login');
  }
}
