import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {id: 0,
      title: 'Manzana',
      price: 20,
      quantity: 2,
      completed: false
    },
    {id: 1,
      title: 'Pera',
      price: 30,
      quantity: 3,
      completed: true
    }
  ];
  
  constructor() { }

  getItems(){
    return this.items;
  }

  addItem ( item: Item){
    this.items.unshift(item);
  }
}
