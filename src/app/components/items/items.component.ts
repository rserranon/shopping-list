import { Component, OnInit } from '@angular/core';
import { Item} from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.items =  [
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

    this.getTotal();

  }

  deleteItem(item: Item){
    this.items = this.items.filter(x => x.id !== item.id);
    this.getTotal();
    console.log('deleteItem');
  }

  toggleItem(item: Item){
    this.getTotal();
  }

  getTotal() {
    this.total = this.items
                 .filter(x => !x.completed)
                 .map( x => x.quantity * x.price)
                 .reduce( ( acc, x) => acc += x, 0);
  }
  
}
