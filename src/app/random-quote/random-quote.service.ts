import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BehaviorSubject, Subject } from "rxjs";
import { shareReplay, take } from "rxjs/operators";
import { Quote } from "./quote";

@Injectable({
  providedIn: "root"
})
export class RandomQuoteService {
  url =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  quotes$ = this.http
    .get<{quotes: Quote[]}>(this.url)
    .pipe(
      shareReplay(1),
      take(1),
      
    );
  
  quotes = [];
  max = 0;
  quoteSubject = new Subject<Quote>();
  quote$ = this.quoteSubject.asObservable();

  constructor(private http: HttpClient) {}

  getQuotes() {
    this.quotes$.subscribe(response => {
      this.max = this.quotes.length - 1;
      this.quoteSubject.next(this.quotes[0]);
    })
  }

  getRandomQuote() {
    const randomNumber = Math.floor(Math.random() * (this.max + 1) );
    this.quoteSubject.next(this.quotes[randomNumber]);
  }

 
}

