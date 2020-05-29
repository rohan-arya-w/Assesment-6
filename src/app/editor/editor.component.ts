import { Component, OnInit, Input } from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input('htmlContent') htmlContent;
  @Input('instruction') instruction; 
  constructor() { }

  ngOnInit(): void {
  }
edit(){
    let j = this.htmlContent;  
    let i =[];
    i.push(j);
    console.log(i);
  }
}
