import { Component, inject, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { Navbar } from './core/components/navbar/navbar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProductPageComponent } from './feature/products/pages/product-page/product-page.component';
import { Footer } from './core/components/footer/footer';
import { ModalComponent } from './shared/components/modal/modal.component';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from './feature/auth/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ProductPageComponent, NgxSpinnerModule, Footer, ModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('E-commerce01');
  private readonly flowbiteService = inject(FlowbiteService);
  private readonly platID = inject(PLATFORM_ID);
  @ViewChild(ModalComponent) authModal!: ModalComponent;
  private readonly authServices = inject(AuthService);
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
    this.authServices.checkAuthOnInit();
  }
  ngAfterViewInit() {
    // اعمل الـ Modal متاح عالمياً
    if (isPlatformBrowser(this.platID)) {
      (window as any).openAuthModal = () => this.authModal.open();
    }
  }
}
