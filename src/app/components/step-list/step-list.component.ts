import { Component, Input, OnInit } from '@angular/core';
import { CookingStep } from 'src/app/interfaces/cooking-step';
import { Ingredient } from 'src/app/interfaces/ingredient';

@Component({
  selector: 'app-step-list',
  templateUrl: './step-list.component.html',
  styleUrls: ['./step-list.component.css']
})
export class StepListComponent implements OnInit {
  @Input() title: string = ''
  @Input() subtitle?: string
  @Input() items: CookingStep[] | Ingredient[] = []
  @Input() isNumber: boolean = false
  
  isIngredientList: boolean = false

  ngOnInit(): void {
    this.items = this.items.map(item => ({ ...item, isCheck: false }))
  }

  toggleCheck(index: number) {
    this.items[index].isCheck = !this.items[index].isCheck
  }
}
