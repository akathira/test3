import { Component, OnInit } from '@angular/core';
import { InvestorsService } from '../../investors.service';
import { investors } from '../../model/investors';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrl: './fetch.component.css'
})
export class FetchComponent implements OnInit{

  ngOnInit(): void{
    this.investors=this.getInvestors();
  }

  investors: investors[]=[];

  constructor(private service : InvestorsService ) {}

getInvestors(): any{
  this.service.getInvestors().subscribe((investors) => {
    this.investors=investors;
    });

}
 


}

