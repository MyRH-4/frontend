import { Component, Input, OnInit } from '@angular/core';
import { TimerComponent } from '../../../shared/timer/timer.component';
import { RouterLink } from '@angular/router';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { QuizQuestionResponseComponent } from '../quiz-question-response/quiz-question-response.component';
import { Question } from '../../../core/model/question';
import { loadavg } from 'os';
import { privateDecrypt } from 'crypto';
import { TuiHintsHostComponent } from '@taiga-ui/core';

@Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [
    TimerComponent,
    RouterLink,
    NgOptimizedImage,
    QuizQuestionResponseComponent,
    NgFor,
  ],
  templateUrl: './quiz-question.component.html',
  styleUrl: './quiz-question.component.css',
})
export class QuizQuestionComponent implements OnInit {
  ngOnInit(): void {
    this.fetchQuestions();
    console.clear();
    console.log(this.user);

    this.user = JSON.parse(localStorage.getItem('googleData') || '{}');
    console.log(this.user);
  }
  @Input() question!: Question;
  questions: Question[] = [
    {
      id: '1be26d1e-844e-4609-b850-ff740ed4466f',
      text: 'java is a programming language',
      imageUrl: '',
      createdAt: new Date(),
      options: [],
      time: 6,
      type: 'TRUE_FALSE',
      updatedAt: new Date(),
      version: 1,
    },
    {
      id: 'ec9d699d-b990-4821-9ce8-2f623dc99681',
      text: 'is java a low level language ?',
      imageUrl: '',
      createdAt: new Date(),
      options: [],
      time: 6,
      type: 'TRUE_FALSE',
      updatedAt: new Date(),
      version: 1,
    },
  ];
  user: any = {
    firstname: 'Mohamed',
    lastname: 'Bourra',
  };

  private fetchQuestions() {
    // this.question = JSON.parse(localStorage.getItem('questions') || '{}');
    // console.clear;
    // console.log(this.question);
    // console.log('yeah');
  }

  falseClicked() {
    localStorage.setItem("displayBadge", "true")
    alert('You Passed the quiz successfully');
  }
}
