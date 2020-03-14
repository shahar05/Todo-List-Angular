import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../page/models';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  @Input() tickets:Ticket[];
  @Output() itemClicked : EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor() { }

  ngOnInit() {
  }

  removeItem($event){
    this.itemClicked.emit($event);
    console.log("hi");
    
  }

}
