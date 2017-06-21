import { Ticket } from './ticket';
 
export const TICKETS: Ticket[] = [{
    id : 1,
    status : { id  : 1, name : 'Pending', default : true},
    category : { id : 2, name : 'Online Forms' },
    priority : { id : 3, name : 'High', default: false},
    created : 'Monday'
  },{
    id : 2,
    status : { id  : 1, name : 'Completed', default : true},
    category : { id : 2, name : 'Online Forms'},
    priority : { id : 3, name : 'High', default: false},
    created : 'Tuesday'
  }];