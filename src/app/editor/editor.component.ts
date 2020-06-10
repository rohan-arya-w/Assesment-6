import { Component, OnInit, Input } from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import { ContentServiceService } from '../content-service.service';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  
  constructor(public ContentService:ContentServiceService) { }

  ngOnInit(): void {
  }
edit(){
 this.ContentService.topics[0] = {'topictitle':this.ContentService.topicContent ,'topictype':this.ContentService.topictype,'topicContent':this.ContentService.topicContent,'topicInstructions':this.ContentService.topicInstructions }

 console.log(this.ContentService.topics)
  }
  
}
