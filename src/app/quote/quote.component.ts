import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[]
  addQuote(myQuote){
    this.quotes.push(myQuote)
  }

  upvote(i){
    this.quotes[i].upvotes +=1
  }
  downvote(i){
    this.quotes[i].downvotes +=1
  }
  constructor() { }

  ngOnInit() {
  }

}
