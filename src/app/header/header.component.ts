import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true
})
export class HeaderComponent {
  isNavbarCollapsed = true;

  toggleNavbarCollapsing() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
