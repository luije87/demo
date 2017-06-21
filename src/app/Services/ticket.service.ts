import { Injectable } from '@angular/core';
import { Ticket } from '../ticket';
import { TICKETS } from '../mock-tickets';


@Injectable()
export class TicketService {

  constructor() { }

  getTickets(): Ticket[] {
    return TICKETS;
  }

  getTicket(id: Number): Ticket {
    return TICKETS[0];
  }

  setSave(item: Ticket): void {
    console.log('setSave');
  }
}
