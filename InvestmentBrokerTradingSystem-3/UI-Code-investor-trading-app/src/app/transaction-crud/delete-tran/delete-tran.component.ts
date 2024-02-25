import { Component } from '@angular/core';
import { transactions } from '../../model/transactions';
import { TransactionsService } from '../../transactions.service';

@Component({
  selector: 'app-delete-tran',
  templateUrl: './delete-tran.component.html',
  styleUrl: './delete-tran.component.css'
})
export class DeleteTranComponent {

  searchTerm: string = '';
 
  constructor(private service : TransactionsService ) {
  
  }

  output: string='';
  deletesearch(): void {
    if (this.searchTerm.trim() !== '') {
      this.service.deleteResource(this.searchTerm).subscribe(
        () => {
          console.log('Resource deleted successfully');
          this.output= "Deleted successfully";
        },
        error =>  console.error('Error deleting resource:', error));
      };
    }


}
