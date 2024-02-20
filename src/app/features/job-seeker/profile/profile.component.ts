import { Component, OnInit } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiMarkerIconModule } from '@taiga-ui/kit';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { RouterModule } from '@angular/router';
import { BadgeService } from '../../../core/services/badge.service';
import { Badge } from '../../../core/model/badge';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    TuiButtonModule,
    TuiMarkerIconModule,
    NavBarComponent,
    RouterModule,
    NgFor,
    NgIf,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  isUserNotLoaded: boolean = true;
  user: any;
  badges: Badge[] = [];
  maleAvatar: string = '../../../../assets/image/avatars/male avatar.jpg';
  femaleAvatar: string = '../../../../assets/image/avatars/female avatar.jpg';
  display: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private badgeService: BadgeService
  ) {}

  ngOnInit(): void {
    if(localStorage.getItem("displayBadge") != null) this.display = true
    this.getAuthenticatedUserData();
  }

  private getAuthenticatedUserData() {
    this.authenticationService
      .getCurrentAuthenticatedUser()
      .subscribe((res) => {
        this.user = res;
        console.log(this.user.image);
        localStorage.setItem('googleData', JSON.stringify(this.user));
        // this.isUserNotLoaded = true;
        this.getUserBadges(); // fetch user badges after the actual user data is fully fetched (to avoid multi-threading errors)
      });
  }

  private getUserBadges() {
    this.badgeService.getUserBadges(this.user.id).subscribe({
      next: (data) => {
        this.badges = data;
        console.log(data);
      },
      error: (err) => {
        console.log('an error occured while fetching user badges');
        console.log(err);
      },
    });
  }
}
