import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { STORED_KEYS } from '../../../../core/contstants/storedKey';

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent implements OnInit {
  public readonly authServices = inject(AuthService);
  private readonly platID = inject(PLATFORM_ID);
  ngOnInit(): void {
    this.getInfoData();
  }
  getInfoData() {
    if (isPlatformBrowser(this.platID)) {
      const id = localStorage.getItem(STORED_KEYS.UserId)!;
      this.authServices.getInfo(id);
    }
  }
}
