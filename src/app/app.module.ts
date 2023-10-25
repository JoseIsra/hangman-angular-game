import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { HangmanComponent } from './components/hangman/hangman.component';
import { HeadComponent } from './components/hangman/head/head.component';
import { StickComponent } from './components/hangman/stick/stick.component';

@NgModule({
  declarations: [AppComponent, KeyboardComponent, HangmanComponent, HeadComponent, StickComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
