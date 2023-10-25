import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hangman-angular-game';
  word = 'Javascript';

  handleLetterSelected(letter: string) {
    console.log('has recibido una letra', letter);
  }
}
