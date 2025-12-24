import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { NavbarBottomComponent } from '../../components/navbar-bottom/navbar-bottom.component';

@Component({
  selector: 'app-main-layout',
  imports: [Navbar, RouterOutlet, NavbarBottomComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
