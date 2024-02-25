import { Component, OnInit } from '@angular/core';
import { transactions } from '../../model/transactions';
import { TransactionsService } from '../../transactions.service';

@Component({
  selector: 'app-fetch-tran',
  templateUrl: './fetch-tran.component.html',
  styleUrl: './fetch-tran.component.css'
})
export class FetchTranComponent implements OnInit {

  ngOnInit(): void{
    this.transactions =this.geTransactions ();
  }

  transactions : transactions []=[];

  constructor(private service : TransactionsService ) {}

geTransactions(): any{
  this.service.getTransactions().subscribe((transactions) => {
    this.transactions =transactions ;
    });

}
}