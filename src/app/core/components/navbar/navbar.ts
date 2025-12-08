import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../feature/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Input({ required: true }) islogin!: boolean;
  public readonly authService = inject(AuthService);
  logOut() {
    this.authService.logOut();
  }
}
