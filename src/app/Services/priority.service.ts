import { Injectable } from '@angular/core';
import { Priority } from '../priority';
import { PRIORITIES } from '../mock-priorities';

@Injectable()
export class PriorityService {

  constructor() { }

  getPriorities(): Priority[] {      
      return PRIORITIES;
  }

}
