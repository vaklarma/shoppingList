import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {ShoppingListModel} from '../model/shoppingList.model';

@Component({
  selector: 'app-shopping-list-row',
  templateUrl: './shopping-list-row.component.html',
  styleUrls: ['./shopping-list-row.component.css']
})
export class ShoppingListRowComponent implements OnInit {
  successGain = false;
  itemGainClass;
  btnClass = 'btn btn-danger';

  @Input() shoppingList: ShoppingListModel;
  @Output() select = new EventEmitter<ShoppingListModel>();

  constructor() {
  }

  ngOnInit() {
  }


  @HostListener('click', ['$event'])
  onHostClick($event) {
    $event.stopPropagation();
    $event.preventDefault();

    this.select.emit(this.shoppingList);
    if (!this.successGain) {
      this.btnClass = 'btn btn-success';
      this.itemGainClass = 'shoppingListItem-through text-muted';
    } else {
      this.btnClass = 'btn btn-danger';
      this.itemGainClass = '';
    }
    this.successGain = !this.successGain;
  }
}
