import {Injectable} from '@angular/core';
import {ShoppingListModel} from './model/shoppingList.model';
import {AngularFireDatabase} from '@angular/fire/database';
import {from} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  shoppingList: ShoppingListModel[];



  constructor(private afDb: AngularFireDatabase) {
    this.shoppingList = [
      new ShoppingListModel({
        shoppingListId: '00001',
        shoppingItemText: 'itemtext'
      }),
      new ShoppingListModel({
        shoppingListId: '00002',
        shoppingItemText: 'itemtext 0002'
      }),
      new ShoppingListModel({
        shoppingListId: '00003',
        shoppingItemText: 'itemtext sdvaerísdvwvwev'
      }),
      new ShoppingListModel({
        shoppingListId: '00003',
        shoppingItemText: 'itemtext sdvaerísdvwvwev'
      }),
      new ShoppingListModel({
        shoppingListId: '00003',
        shoppingItemText: 'itemtext sdvaerísdvwvwev'
      }),
      new ShoppingListModel({
        shoppingListId: '00003',
        shoppingItemText: 'itemtext sdvaerísdvwvwev'
      }),
      new ShoppingListModel({
        shoppingListId: '00003',
        shoppingItemText: 'itemtext sdvaerísdvwvwev'
      }),
      new ShoppingListModel({
        shoppingListId: '00003',
        shoppingItemText: 'itemtext sdvaerísdvwvwev'
      }),
      new ShoppingListModel({
        shoppingListId: '00003',
        shoppingItemText: 'itemtext sdvaerísdvwvwev'
      }),
      new ShoppingListModel({
        shoppingListId: '00003',
        shoppingItemText: 'itemtext sdvaerísdvwvwev'
      }),
      new ShoppingListModel({
        shoppingListId: '00003',
        shoppingItemText: 'itemtext sdvaerísdvwvwev'
      }),
    ];

  }
addShoppingList(param: ShoppingListModel) {
  from(this.afDb.list<ShoppingListModel>('shoppingLists').push({
    shoppingListId: 'id00001',
    shoppingItemText: 'első elem'
  })).subscribe(
    resp => console.log(resp)
  )

}
  getShoppingListItems() {
    return this.shoppingList;
  }
addShoppingListItem(param: ShoppingListModel) {

}
}
