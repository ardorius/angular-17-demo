import { Component } from '@angular/core';
import { NgClass, AsyncPipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NgClass, HeaderComponent, RouterOutlet, FooterComponent, AsyncPipe]
})
export class AppComponent {
  title = 'angular-17-demo';
}
