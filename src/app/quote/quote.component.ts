import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [

    new Quote(1, " Steve Jobs", "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking", new Date(2021.20, 15)),

    
   
  ]
  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm('Are you sure you want to delete quote')
      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

    addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)

    }

    upVotes:number=0;
    upVote(){
      this.upVotes=this.upVotes+1;

    }
    downVotes:number=0;
    downVote(){
      this.downVotes=this.downVotes+1;

    }
    constructor() { }

    ngOnInit() {
    }
}
