import { Component, OnInit } from '@angular/core';
import { GetAllClientsService } from '../../../services/clients/get-all-clients.service';
import { CurrentClientService } from '../../../services/clients/currentClient.service';
import { CLient } from '../../../Interfaces/Clients';

@Component({
  selector: 'app-clients',
  templateUrl: 'clients.component.html',
  styleUrls: ['clients.component.styl']
})
export class ClientsComponent implements OnInit {

  public clients: any[] = [];

  constructor(
    private allClients: GetAllClientsService,
    private currentClientS: CurrentClientService
  ) { }

  ngOnInit() {
    this.clients = this.allClients.getAllClients();
    console.log(this.clients, ' clients');
  }

  selectClient(key:string) {
    let client = this.clients[key];
    this.currentClientS.client$.next(client);
  }

  search() {
  }
}

