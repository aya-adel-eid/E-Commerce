import { Component } from '@angular/core';
import { NavbarBottomComponent } from '../../components/navbar-bottom/navbar-bottom.component';

import { Navbar } from '../../components/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gust-layout',
  imports: [NavbarBottomComponent, RouterOutlet, Navbar],
  templateUrl: './gust-layout.html',
  styleUrl: './gust-layout.css',
})
export class GustLayout {}
