import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../Services/category.service';
import { PriorityService } from '../Services/priority.service';
import { UserService } from '../Services/user.service';
import { StatusService } from '../Services/status.service';
import { User } from '../user';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-root',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit {

  item: User;

  categories : any;
  priorities : any;
  statuses : any;
  agents : User[];
  users : User[];
  category : any;
  status : any;
  priority : any;

  constructor(private categoryService: CategoryService, private priorityService: PriorityService, private userService: UserService, private statusService: StatusService) {
    this.item = new User;
    this.categories = categoryService.getCategories();
    this.priorities = priorityService.getPriorities();
    this.priority = this.priorities.find(x => x.default == true);
    this.agents = userService.getAgents();
    this.users = userService.getAUsers();
    this.statuses = statusService.getStatuses();
    this.status = this.statuses.find(x => x.default == true);
  }


  create(){
    console.log("!");
  }

  ngOnInit() {
  }

}
