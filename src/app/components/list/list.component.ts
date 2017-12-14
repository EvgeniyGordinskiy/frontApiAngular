import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.styl']
})
export class ListComponent implements OnInit {

  @Input() public items:any[] = [];


  @Output() public itemKey: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  /**
   * Emit selected item by key
   * @param key
   */
  public selectItem(key:string) {
    this.itemKey.emit(key);
  }
}
