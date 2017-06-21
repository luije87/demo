import { Injectable } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';

@Injectable()
export class UserService {

  constructor() { }

  getAgents(): User[] {      
      return USERS;
  }

  getAUsers(): User[] {      
      return USERS;
  }

}
