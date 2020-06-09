import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {
  topictitle : '';
  topictype : '';
  topicContent: '';
  topicInstructions : '';
  constructor() { }
}
