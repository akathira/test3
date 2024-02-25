import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { transactions} from './model/transactions';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  saveTransactions(transactions: transactions): Observable<object>

  {
    return this.http.post("http://localhost:9090/transaction/addtransactions",transactions);
  }

  getTransactions(): Observable<transactions[]>{
    return this.http.get<transactions[]>("http://localhost:9090/transaction/fetch");
  }

  deleteResource(id : String): Observable<any> {
    return this.http.delete("http://localhost:9090/transaction/transactionsid/"+id+"").pipe(
      catchError(error => {
        console.error('Error parsing response:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
    }

    getTransactionsbyId(id : String): Observable<any> {
      return this.http.get<any>("http://localhost:9090/transaction/transactionsid/"+id).pipe(
        catchError(error => {
          console.error('Error parsing response:', error);
          return throwError('Something went wrong; please try again later.');
        })
      );
      }

      updateEntity(transactions: transactions): Observable<any> {
        return this.http.put("http://localhost:9090/transaction/updatetransactions", transactions);
      }

}
