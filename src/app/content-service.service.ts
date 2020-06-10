import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {
  topictitle : '';
  topictype : '';
  topicContent: string;
  topicInstructions : '';
  topics =[] 
  constructor() { }
  CreateTopic(){
    let p_topic ={}
    p_topic['topictitle'] =  this.topictitle
    p_topic['topictype'] = this.topictype
    p_topic['topicContent'] = this.topicContent
    p_topic['topicInstructions'] =this.topicInstructions
    this.topics.push(p_topic);
    console.log(this.topics)
  }
  deletetopic(index){
    this.topics.splice(index,1);
    
  }
}
