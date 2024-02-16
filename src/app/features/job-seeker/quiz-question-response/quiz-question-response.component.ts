import { Component, Input } from '@angular/core';
import { Option } from '../../../core/model/option';

@Component({
  selector: 'app-question-response',
  standalone: true,
  imports: [],
  templateUrl: './quiz-question-response.component.html',
  styleUrl: './quiz-question-response.component.css'
})
export class QuizQuestionResponseComponent {
  @Input() option!: Option;
}
