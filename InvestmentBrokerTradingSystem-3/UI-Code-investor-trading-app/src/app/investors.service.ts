
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { investors } from './model/investors';
import { catchError, throwError } from 'rxjs';
import { HttpParameterCodec } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvestorsService {

  constructor(private http: HttpClient) { }

  saveInvestor(investors: investors): Observable<object>

  {
    return this.http.post("http://localhost:9090/investor/addinvestor",investors);
  }

  getInvestors(): Observable<investors[]>{
    return this.http.get<investors[]>("http://localhost:9090/investor/fetch");
  }

  deleteResource(id : String): Observable<any> {
    return this.http.delete("http://localhost:9090/investor/investorsid/"+id+"").pipe(
      catchError(error => {
        console.error('Error parsing response:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
    }

    getInvestorbyId(id : String): Observable<any> {
      return this.http.get<any>("http://localhost:9090/investor/investorid/"+id).pipe(
        catchError(error => {
          console.error('Error parsing response:', error);
          return throwError('Something went wrong; please try again later.');
        })
      );
      }

      updateEntity(investors: investors): Observable<any> {
        return this.http.put("http://localhost:9090/investor/updateinvestor", investors);
      }
}
  

  