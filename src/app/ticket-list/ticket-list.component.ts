import { Component, OnInit } from '@angular/core';
import { TicketService } from '../Services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  
  collection : any;
  constructor(private ticketService : TicketService) { 
      this.collection = ticketService.getTickets();
  }

  ngOnInit() {
  }

}
