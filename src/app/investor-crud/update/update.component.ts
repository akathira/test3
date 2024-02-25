import { Component, OnInit } from '@angular/core';
import { InvestorsService } from '../../investors.service';
import { investors } from '../../model/investors';
import { FindbyidComponent } from '../findbyid/findbyid.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  
  investors: investors = new investors();
  
  constructor(private investorsService : InvestorsService ){}

  ngOnInit(): void {

  }

  updateEntity(): void {
    this.investorsService.updateEntity(this.investors).subscribe(
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
    this.investors=event;
  }

  
}





