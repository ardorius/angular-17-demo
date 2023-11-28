import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  constructor(private httpClient: HttpClient){

  }
  angularVersion: any[] = [];

  ngOnInit(): void {
    this.getVersions();
  }

  getVersions(){
    this.httpClient.get<any[]>('assets/data/angularData.json')
    .subscribe((data:any[]) => {
      this.angularVersion = data;
    });
  }
}
