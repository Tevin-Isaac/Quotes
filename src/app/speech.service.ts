import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  speechSynthesis = window.speechSynthesis;
  voices = speechSynthesis.getVoices();

  constructor() { }

  cancel() {
    speechSynthesis.cancel();
  }

}