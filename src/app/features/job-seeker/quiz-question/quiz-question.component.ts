import { Component, Input } from '@angular/core';
import {TimerComponent} from "../../../shared/timer/timer.component";
import {RouterLink} from "@angular/router";
import {NgFor, NgOptimizedImage} from "@angular/common";
import { QuizQuestionResponseComponent } from '../quiz-question-response/quiz-question-response.component';
import { Question } from '../../../core/model/question';

@Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [
    TimerComponent,
    RouterLink,
    NgOptimizedImage,
    QuizQuestionResponseComponent,
    NgFor
  ],
  templateUrl: './quiz-question.component.html',
  styleUrl: './quiz-question.component.css'
})
export class QuizQuestionComponent {
  @Input() question!: Question;
}
