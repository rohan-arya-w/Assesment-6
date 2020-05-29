import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css'],
})
export class DaysComponent implements OnInit {
  @Input('getTopic') getTopic;
  data = {
    title:[],
    i: 0,
    dayList: [],
    dayCount: 0,
    topic:[],
    
    addDay() {
      let obj = {};
      obj['dayNum'] = 'Day ' + (++this.i);
      this.dayCount=this.dayList.length+1;
      this.dayList.push(obj);
      this.title.push([]);
      console.log(this.dayCount);
    },
    close(index){
      this.dayList.splice(index,1);
      this.title.splice(index,1);
    }
  };
  constructor() {}
  ngOnInit(): void {

  }
}
