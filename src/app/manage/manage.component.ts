import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ContentServiceService } from '../content-service.service';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})

export class ManageComponent implements OnInit {
  @Input('htmlContent') htmlContent;
  @Input('instruction') instruction; 
  
  closeResult = '';
  constructor(private modalService: NgbModal ,public DataService:DataServiceService, public ContentService:ContentServiceService) {}
  open(content) {
    
    this.modalService.open(content, { size: 'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit(): void {
  }
  
  
}
