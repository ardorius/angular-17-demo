import { Component } from '@angular/core';
import { NgSwitch, NgFor, NgIf, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [NgSwitch, NgFor, NgIf, NgSwitchCase, NgSwitchDefault, PortfolioComponent]
})
export class HomeComponent {
  showAngularDescription: boolean = false; // Túto premennú môžete meniť podľa potreby

  currentView: string = 'overview'; // môže mať hodnoty 'overview', 'benefits', 'community', 'default'

  keyFeatures: string[] = [
    'Component-based architecture',
    'Two-way data binding',
    'Modularity',
    'Dependency Injection',
    'Comprehensive routing'
  ];
}
