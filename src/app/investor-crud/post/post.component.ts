import { Component, OnInit } from '@angular/core';
import { InvestorsService } from '../../investors.service';
import { investors} from '../../model/investors';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{

  ngOnInit(): void{
  }
  investors: investors = new investors();
  constructor(private investorsService : InvestorsService )
  {
  
  }

  onSubmit(){
    console.log(this.investors);
    this.saveInvestors();
  }
saveInvestors(){
  this.investorsService.saveInvestor(this.investors).subscribe((data)=>{
    console.log(data);
  },
  error=>console.log(error));
}


}


