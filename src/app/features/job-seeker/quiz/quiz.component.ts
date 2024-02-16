import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiMarkerIconModule } from '@taiga-ui/kit';
import {AuthBackgroundComponent} from "../../../shared/auth-background/auth-background.component";
import {NgOptimizedImage} from "@angular/common";
import {NavBarComponent} from "../../../shared/nav-bar/nav-bar.component";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    TuiMarkerIconModule,
    RouterModule,
    AuthBackgroundComponent,
    NgOptimizedImage,
    NavBarComponent
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

}
