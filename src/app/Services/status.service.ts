import { Injectable } from '@angular/core';
import { Status } from '../status';
import { STATUSES } from '../mock-statuses';

@Injectable()
export class StatusService {

  constructor() { }

  getStatuses(): Status[] {      
      return STATUSES;
  }

}
