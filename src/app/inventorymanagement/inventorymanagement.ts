import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms';

@Component({
  selector: 'app-inventorymanagement',
  imports: [CommonModule, FormsModule],
  templateUrl: './inventorymanagement.html',
  styleUrl: './inventorymanagement.css',
})
export class Inventorymanagement {

products = [
  { id: 1, name: 'Shirt', stock: 0, category: 'clothing' },
  { id: 2, name: 'Jeans', stock: 5, category: 'clothing' },
  { id: 3, name: 'Sneakers', stock: 4, category: 'footwear' },
  { id: 4, name: 'Jacket', stock: 15, category: 'clothing' },
  { id: 5, name: 'Watch', stock: 4, category: 'accessories' },
  { id: 6, name: 'Bag', stock: 5, category: 'accessories' }
];

  getstockstatus(stock:number){
    if(stock === 0) return "no stock";
    if(stock < 5) return 'low stock';
    return 'in stock';
    
  }

 selectedCategory  ="clothing";


 isVisible: boolean = true;

   toggleDisplay() {
    this.isVisible = !this.isVisible;
  }
}
