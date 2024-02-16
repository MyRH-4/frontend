import { Component, OnInit } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiMarkerIconModule } from '@taiga-ui/kit';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    TuiButtonModule,
    TuiMarkerIconModule,
    NavBarComponent,
    RouterModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  isUserNotLoaded: boolean = true;
  user: any;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.authenticationService.getCurrentAuthenticatedUser().subscribe(res => {
      this.user = res;
      this.isUserNotLoaded = true;
    })
  }
}
