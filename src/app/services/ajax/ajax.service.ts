import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private _http: HttpClient) { }

  getTest = () => {
    return this._http.get('http://47.92.222.71:3000/api/interface/test');
  }
}
