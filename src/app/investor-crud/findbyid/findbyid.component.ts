import { Component, EventEmitter, Output } from '@angular/core';
import { investors } from '../../model/investors';
import { InvestorsService } from '../../investors.service';

@Component({
  selector: 'app-findbyid',
  templateUrl: './findbyid.component.html',
  styleUrl: './findbyid.component.css'
})
export class FindbyidComponent {

  investors: investors = new investors();

  @Output() newItemEvent = new EventEmitter<any>();
  
  constructor(private investorsService : InvestorsService ){}

  searchTerm: string = '';

  search(): void {
    if (this.searchTerm.trim() !== '') {
      this.investorsService.getInvestorbyId(this.searchTerm).subscribe((result: any) => {
        this.investors = result;
        this.newItemEvent.emit(this.investors);
      });
    }
  }


}
