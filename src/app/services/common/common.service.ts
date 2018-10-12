import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getTestData = () => {
    return [
      { name: 'n', value: 'v'}
    ];
  }
}
