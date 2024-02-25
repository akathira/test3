import { Component } from '@angular/core';
import { transactions } from '../../model/transactions';
import { TransactionsService } from '../../transactions.service';

@Component({
  selector: 'app-post-tran',
  templateUrl: './post-tran.component.html',
  styleUrl: './post-tran.component.css'
})
export class PostTranComponent {

  ngOnInit(): void{
  }
  transactions: transactions= new transactions();
  constructor(private transactionsService: TransactionsService )
  {
  
  }

  onSubmit(){
    console.log(this.transactions);
    this.saveTransactions();
  }
saveTransactions(){
  this.transactionsService.saveTransactions(this.transactions).subscribe((data)=>{
    console.log(data);
  },
  error=>console.log(error));
}

addItem(event:any){
  console.log(event);
  this.transactions.investors=event;
}

}
