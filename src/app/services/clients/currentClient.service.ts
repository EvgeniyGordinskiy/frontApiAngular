import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CurrentClientService {

  public client$: Subject<any> = new Subject<any>();

  constructor() {
  }


}