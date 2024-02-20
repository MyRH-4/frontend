import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiMarkerIconModule } from '@taiga-ui/kit';
import { AuthBackgroundComponent } from '../../../shared/auth-background/auth-background.component';
import { NgOptimizedImage } from '@angular/common';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../core/model/quiz';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    TuiMarkerIconModule,
    RouterModule,
    AuthBackgroundComponent,
    NgOptimizedImage,
    NavBarComponent,
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  constructor(private service: QuizService) {
    this.user = JSON.parse(localStorage.getItem('googleData') || '{}');
    console.clear();
    console.log(this.user.firstname + ' ' + this.user.lastname);
    console.log(this.user);
    this.getJavaQuiz();
  }
  user: any = {};
  quiz: any;

  private getJavaQuiz() {
    this.service.getJavaQuiz().subscribe({
      next: (data) => {
        this.quiz = data;
        console.log(data.questions);
        const stringQuestion: string = this.quiz.questions
          .map((question: any) => JSON.stringify(question))
          .join('\n');
        console.log(stringQuestion);
        localStorage.setItem('questions', stringQuestion);
      },
      error: (err) => {
        console.clear();
        console.log('an error occured while fetching java quiz');
        console.log(err);
      },
    });
  }
}
