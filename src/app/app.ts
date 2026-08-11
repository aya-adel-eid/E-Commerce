import { Component, inject, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Footer } from './core/components/footer/footer';
import { ModalComponent } from './shared/components/modal/modal.component';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from './feature/auth/services/auth.service';
import { NavbarService } from './core/components/navbar/navbar.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSpinnerModule, Footer, ModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('E-commerce01');
  private readonly flowbiteService = inject(FlowbiteService);
  public readonly navbarServices = inject(NavbarService);
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
    if (isPlatformBrowser(this.platID)) {
      (window as any).openAuthModal = () => this.authModal.open();
    }
  }
}
