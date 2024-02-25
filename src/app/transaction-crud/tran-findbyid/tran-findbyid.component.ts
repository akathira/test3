import { Component, EventEmitter, Output } from '@angular/core';
import { transactions } from '../../model/transactions';
import { TransactionsService } from '../../transactions.service';

@Component({
  selector: 'app-tran-findbyid',
  templateUrl: './tran-findbyid.component.html',
  styleUrl: './tran-findbyid.component.css'
})
export class TranFindbyidComponent {

  transactions: transactions = new transactions();

  @Output() newItemEvent = new EventEmitter<any>();
  
  constructor(private transactionsService: TransactionsService ){}

  searchTerm: string = '';

  search(): void {
    if (this.searchTerm.trim() !== '') {
      this.transactionsService.getTransactionsbyId(this.searchTerm).subscribe((result: any) => {
        this.transactions = result;
        this.newItemEvent.emit(this.transactions);
      });
    }
  }

  addItem(event:any){
    console.log(event);
    this.transactions.investors=event;
  }
  



}
