import { Component, OnInit, Input } from '@angular/core';
import { CurrentClientService } from '../../services/clients/currentClient.service';
import { Subject } from 'rxjs';
import { CLient } from '../../Interfaces/Clients';
import { isArray } from 'util';
import { isNull } from 'util';
import { isObject } from 'util';

@Component({
  selector: 'app-client-detail',
  templateUrl: 'client-detail.component.html',
  styleUrls: ['client-detail.component.styl']
})
export class ClientDetailComponent implements OnInit {

  private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();
  public client:any;
  constructor(
    private currentClientS: CurrentClientService
  ) { }

  ngOnInit() {
    this.subscribeToClientEvent();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private subscribeToClientEvent() {
    this.currentClientS.client$
      .takeUntil(this.ngUnsubscribe)
      .subscribe(data => {
        this.client = data;
      });
  }

   getKeys(obj){
    return Object.keys(obj);
  }
}

