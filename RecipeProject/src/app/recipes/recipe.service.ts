import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Pizza',
            'A super tasty Morzilla cheese Pizza', 
            'https://static.toiimg.com/thumb/76481989.cms?width=680&height=512&imgsize=170646' ,
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
              ]),
            new Recipe(
                'Burger', 
            'What else you need to say..', 
            'https://www.simplyrecipes.com/wp-content/uploads/2018/06/HT-Grill-Burger-LEAD-VERTICAL-600x840.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
              ])
         
  ];
    constructor(private shoppinglistService: ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppinglistService.addIngredients(ingredients);
    }
}
      