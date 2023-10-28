import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeadComponent } from './head/head.component';
import { StickComponent } from './stick/stick.component';
@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss'],
})
export class HangmanComponent {
  @Input({ required: true }) mistakes = 0;
  @Input() endGame = false;
  @Output() resetBtn = new EventEmitter();

  bodyParts = [
    {
      component: HeadComponent,
    },
    {
      component: StickComponent,
      params: {
        bodyPart: 'body',
      },
    },
    {
      component: StickComponent,
      params: {
        bodyPart: 'left-arm',
      },
    },
    {
      component: StickComponent,
      params: {
        bodyPart: 'right-arm',
      },
    },
    {
      component: StickComponent,
      params: {
        bodyPart: 'left-leg',
      },
    },
    {
      component: StickComponent,
      params: {
        bodyPart: 'right-leg',
      },
    },
  ];

  handleResetGame() {
    this.resetBtn.emit();
  }
}
