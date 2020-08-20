import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap, take, exhaustMap } from "rxjs/operators";
import { AuthService } from '../auth/auth.service';

// @Injectable({providedIn: 'root'})  this is also one type of providing the service instead of providing in app modules
@Injectable()
export class DataStorageService{
    constructor(private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService){}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://recipebook-project-a3872.firebaseio.com/recipes.json',
         recipes).
         subscribe(response=>{
             console.log(response);
         });
    }
    fetchRecipes(){
         // this.authService.user.subscribe().unsubscribe(); this is one method to subscribe only one user and unsubscribe.
        //  this.authService.user.pipe(take(1)).subscribe(); the below line is another method this means we only take 1 user and then unsubscribe it
        
            return this.http
        .get<Recipe[]>(
            'https://recipebook-project-a3872.firebaseio.com/recipes.json',)
            .pipe(
         
        map(recipes=>{
            return recipes.map(recipe =>{
                return {...recipe, 
                    ingredients: recipe.ingredients ? recipe.ingredients: []};
                });
        }),
        tap(recipes=>{
            this.recipeService.setRecipes(recipes);
        })
        );
        
        // .subscribe(recipes=>{
        //     this.recipeService.setRecipes(recipes);
        // });
    }
}