import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  quotePublisher:string
  quoteAuthor:string
  quoteString:string
  myQuote:any;
  @Output() emitQuote = new EventEmitter();
  submitQuote(){
    this.myQuote= new Quote(this.quotePublisher, this.quoteAuthor,this.quoteString)
    this.emitQuote.emit(this.myQuote)
    this.quotePublisher='';
    this.quoteAuthor='';
    this.quoteString='';
  }
  constructor() { }

  ngOnInit() {
  }

}
