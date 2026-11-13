import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { STORED_KEYS } from '../../../../core/contstants/storedKey';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-info',
  imports: [RouterLink],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent implements OnInit {
  public readonly authServices = inject(AuthService);
  private readonly platID = inject(PLATFORM_ID);
  copied = signal(false);
  ngOnInit(): void {
    this.getInfoData();
  }

  copy(text: string) {
    navigator.clipboard?.writeText(text);
  }
  getInfoData() {
    if (isPlatformBrowser(this.platID)) {
      const id = localStorage.getItem(STORED_KEYS.UserId)!;
      this.authServices.getInfo(id);
    }
  }
}
