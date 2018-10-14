import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  nameInput: string;
  amountInput: number;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddItem() {
    // const ingredientName = this.nameInputRef.nativeElement.value;
    // const ingredientAmount = this.amountInputRef.nativeElement.value;
    const ingredientName = this.nameInput;
    const ingredientAmount = this.amountInput;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
