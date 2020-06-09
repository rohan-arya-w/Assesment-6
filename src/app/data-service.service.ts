import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
 Details=[];
  constructor() { }
  getTopic(){
    let days:{};
    days['name'] = "";
    this.Details.push(days)
    console.log(this.Details)
  }
  
}
