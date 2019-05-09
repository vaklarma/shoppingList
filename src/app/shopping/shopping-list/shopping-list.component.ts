import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {ShoppingListModel} from '../model/shoppingList.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: ShoppingListModel[];
  collectedShoppingListItems: ShoppingListModel[] = [];
  @Output() select = new EventEmitter<ShoppingListModel>();

  constructor(shoppingListService: ShoppingListService) {
    this.shoppingList = shoppingListService.getShoppingListItems();
  }

  ngOnInit() {
  }


  onSelectListRow(shoppingList: ShoppingListModel) {
    this.select.emit(shoppingList);
  }

}
