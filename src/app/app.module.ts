import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

import { CategoryService } from './Services/category.service';
import { PriorityService } from './Services/priority.service';
import { UserService } from './Services/user.service';
import { StatusService } from './Services/status.service';
import { TicketService } from './Services/ticket.service';

const appRoutes: Routes = [
  { path: 'add', component: TicketAddComponent },  
  { path: '', component: TicketListComponent },  
];

@NgModule({
  declarations: [
    NavMenuComponent,
    TicketAddComponent,
    TicketListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule 
  ],
  providers: [CategoryService, PriorityService, UserService, StatusService, TicketService],
  bootstrap: [NavMenuComponent]
})
export class AppModule { }
