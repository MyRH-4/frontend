import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionResponseComponent } from './quiz-question-response.component';

describe('QuizQuestionResponseComponent', () => {
  let component: QuizQuestionResponseComponent;
  let fixture: ComponentFixture<QuizQuestionResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizQuestionResponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizQuestionResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
