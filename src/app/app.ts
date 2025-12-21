import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { Navbar } from './core/components/navbar/navbar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProductPageComponent } from './feature/products/pages/product-page/product-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ProductPageComponent, NgxSpinnerModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('E-commerce01');
  private readonly flowbiteService = inject(FlowbiteService);

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
