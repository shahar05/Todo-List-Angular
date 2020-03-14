import { Component, OnInit } from '@angular/core';
import { Ticket } from './models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from '../dialog/dialog.component';
import { LocalStorageService } from '../local-storage.service';
import { LocalStorageKey } from '../enum';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  tickets: Ticket[];


  constructor(private modalService: NgbModal, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    let str = this.localStorageService.loadLocalStorage(LocalStorageKey.tickets);
    if (!str) {
      this.tickets = [];
      return;
    }
    this.tickets = JSON.parse(str);
    console.log(this.tickets);
  }

  addCard() {
    const modalReference = this.modalService.open(DialogComponent).result;

    modalReference.then((ticket: Ticket) => {
      console.log(ticket);
      this.tickets.push(ticket);
      this.saveToLocalStorage();
    }, (error) => { console.log(error); }
    );
  }

  removeItem($event) {

    const index = this.tickets.findIndex((item) => item.id === $event.id);
    this.tickets.splice(index, 1);
    this.saveToLocalStorage();

  }

  saveToLocalStorage() {
    let strTickets = JSON.stringify(this.tickets);
    this.localStorageService.saveLocalStorage(LocalStorageKey.tickets, strTickets);

  }

}
