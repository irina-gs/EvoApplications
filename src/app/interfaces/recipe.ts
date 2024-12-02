import { Author } from "./author";
import { Comment } from "./comment";
import { CookingStep } from "./cooking-step";
import { FoodValue } from "./food-value";
import { Ingredient } from "./ingredient";

export interface Recipe {
    id?: string,
    body: string,
    title: string,
    tags: string[],
    image: string,
    timeCooking: number,
    foodValue?: FoodValue,
    cookingSteps?: CookingStep[],
    ingredients?: Ingredient[],
    author?: Author,
    comments?: Comment[],
    createdOn?: string,
    updatedOn?: string
}