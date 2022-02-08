import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
              

  quotes:Quote[]=[
    new Quote(1,new Date(2018,5,28),"Tracy ","Thuo Wanagri","Enjoy life it is too short.",20,10,false),
    new Quote(2,new Date(2019,10,28),"Miriam","Ajode Lucky","Trust in the process.",20,80,false),
    new Quote(3,new Date(2020,1,26),"Jane","Ng'endo Borot","Be the change that you wish to see in the world.",40,10,false),
    new Quote(4,new Date(2018,2,28),"Yvonne","Naomi Atieno","Do not focus on yesterday instead focus on tomorrow.",20,60,false),
    new Quote(5,new Date(2019,2,28),"Lucy","Polly Mlati","The truth shall set you free.",20,5,false),
   ];

 


  

  addNewQuote(quote){
    let quotesLength=this.quotes.length+1;

    let quoteObj=new Quote(quotesLength,new Date,quote.userName,quote.author,quote.quote,0,0,false);

    this.quotes.push(quoteObj);
  }
  toggleDetails(index){
    this.quotes[index].showQuoteDetails=!this.quotes[index].showQuoteDetails
  }

  deleteQuote(isDeleted,index){

    if(isDeleted){
      let remove=confirm(`Are you sure you want to delete this ${this.quotes[index].quote}?`)
      if(remove){
        this.quotes.splice(index,1)
      }
    }

  }
  upvoteFunc(index){
      var up=this.quotes[index].upvote+1;
      this.quotes[index].upvote=up;
      
  }

  
  downvoteFunc(index){
    var down=this.quotes[index].downvote+1;
    this.quotes[index].downvote=down;
  
}


  constructor() { }

  ngOnInit(): void {
  }

}
