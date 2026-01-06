import { Component, OnInit } from '@angular/core';
import { NavbarBottomComponent } from '../../components/navbar-bottom/navbar-bottom.component';

import { Navbar } from '../../components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-gust-layout',
  imports: [NavbarBottomComponent, RouterOutlet, Navbar, ModalComponent],
  templateUrl: './gust-layout.html',
  styleUrl: './gust-layout.css',
})
export class GustLayout {}
