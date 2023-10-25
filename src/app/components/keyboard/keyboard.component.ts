import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  @Input({ required: true }) currentWord = '';
  @Output() letterSelected = new EventEmitter<string>();

  alphabet = [...'abcdefghijklmnñopqrstuvwxyz'];
  gameWord: string[] = [];
  ngOnInit(): void {
    this.gameWord = [...this.currentWord];
  }

  selectLetter(letter: string) {
    this.letterSelected.emit(letter);
  }
}
