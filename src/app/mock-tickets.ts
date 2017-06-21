import { Ticket } from './ticket';
 
export const TICKETS: Ticket[] = [{
    id : 1,
    status : { id  : 1, name : 'Pending'},
    category : { id : 2, name : 'Online Forms', default: false },
    priority : { id : 3, name : 'High'},
    created : 'Monday'
  },{
    id : 2,
    status : { id  : 1, name : 'Completed'},
    category : { id : 2, name : 'Online Forms', default: false},
    priority : { id : 3, name : 'High'},
    created : 'Tuesday'
  }];