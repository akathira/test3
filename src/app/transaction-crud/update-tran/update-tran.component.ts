import { Component } from '@angular/core';
import { transactions } from '../../model/transactions';
import { TransactionsService } from '../../transactions.service';

@Component({
  selector: 'app-update-tran',
  templateUrl: './update-tran.component.html',
  styleUrl: './update-tran.component.css'
})
export class UpdateTranComponent {

  transactions: transactions = new transactions ();
  
  constructor(private transactionsService : TransactionsService ){}

  ngOnInit(): void {

  }

  updateEntity(): void {
    this.transactionsService .updateEntity(this.transactions ).subscribe(
      (response) => {
        console.log('Entity updated successfully:', response);
      },
      (error) => {
        console.error('Error updating entity:', error);
      }
    );
  }
  addItem(event:any){
    console.log(event);
    this.transactions.investors=event;
  }
  

}
