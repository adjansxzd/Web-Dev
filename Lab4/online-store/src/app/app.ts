import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsProductsComponent } from './components/sport-products/sport-products/sport-products/sports-products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SportsProductsComponent],
  template: `
    <main>
      <app-sports-products></app-sports-products>
    </main>
  `,
  styles: [`
    main {
      min-height: 100vh;
      margin: 0;
      padding: 0;
    }
  `]
})
export class App {
  title = 'sports-store';
}