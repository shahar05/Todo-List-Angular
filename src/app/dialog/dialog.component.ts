import { Component, OnInit } from '@angular/core';
import { Ticket } from '../page/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  ticket : Ticket;
  constructor(public activeModal: NgbActiveModal) { }
  
  ngOnInit() {  this.setDefaultTicket();  }


  sendData(){
    const d = new Date();
    this.ticket.date = d.getTime();
    this.ticket.id = d.getTime().toString();    
    this.activeModal.close(this.ticket);
  }


  setDefaultTicket() {
    this.ticket = {
      body: '',
      date: 0,
      id: '',
      title: ''
    };
  }

}
