import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck {
  title = 'hangman-angular-game';
  word = 'Javascript'.toUpperCase();
  selectedLetters: string[] = [];
  correctLetters: string[] = [];
  wrongLetters: string[] = [];
  mistakes = 0;
  uniqueLetters = [...new Set([...this.word])];

  victory = this.correctLetters.length === this.uniqueLetters.length;

  ngDoCheck(): void {
    if (this.correctLetters.length === this.uniqueLetters.length) {
      this.victory = true;
    }
  }

  handleLetterSelected(letter: string) {
    const upperCased = letter.toUpperCase();
    if (this.uniqueLetters.includes(upperCased)) {
      this.correctLetters.push(upperCased);
    } else {
      this.wrongLetters.push(upperCased);
      this.mistakes += 1;
    }
    this.selectedLetters.push(letter.toUpperCase());
  }

  resetGame() {
    this.selectedLetters = [];
    this.correctLetters = [];
    this.wrongLetters = [];
    this.mistakes = 0;
    this.victory = false;
  }

  handleResetGame() {
    this.resetGame();
  }
}
