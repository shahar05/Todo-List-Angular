  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../page/models';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @Input() ticket : Ticket;
  @Output() itemClicked : EventEmitter<Ticket> = new EventEmitter<Ticket>();
  constructor() { }

  ngOnInit() {
  }

  removeTicket(){
    this.itemClicked.emit(this.ticket);
  
    
  }

}


