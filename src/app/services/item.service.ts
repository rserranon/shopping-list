import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(){
    return [
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
  }
}
