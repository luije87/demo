import { Category } from './category';
import { Priority } from './priority';
import { Status } from './status';

export class Ticket {
    id : Number;
    priority: Priority;
    category : Category;
    status : Status;
    created : string;
}