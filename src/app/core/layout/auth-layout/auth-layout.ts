import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { NavbarBottomComponent } from '../../components/navbar-bottom/navbar-bottom.component';

@Component({
  selector: 'app-auth-layout',
  imports: [Navbar, RouterOutlet, NavbarBottomComponent],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout {}
