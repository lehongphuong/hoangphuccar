import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class TripcarService {
  getAllWhatUrl = "http://localhost:8081/tripcar/api/selectAllByWhat.php"; 
  // getAllWhatUrl = "http://localhost/new/tripcar/api/selectAllByWhat.php"; 
  // getAllWhatUrl = "http://hoctienganhphanxa.com/api/selectAllByWhat.php"; 
  constructor(private http: Http) { }

  excuteAllByWhat(param: any, what: string): Observable<any[]> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    param.what = what;
    console.log('Param input',param);
    return this.http.post(this.getAllWhatUrl, param, options).map((response: Response) => response.json());
  }
  
  sentMail(param: any): Observable<any[]> { 
    return this.http.get(param).map((response: Response) => response.json());
  }
}
