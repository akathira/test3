import { Component, OnInit } from '@angular/core';
import { InvestorsService } from '../../investors.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent  {

  searchTerm: string = '';
 
  constructor(private service : InvestorsService ) {
  
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

