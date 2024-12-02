import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ResetFavoriteRecipeList, UpdateFavoriteRecipeList } from "./model/favorite-recipe-list.model";

@State<string[]>({
    name: 'FavoriteRecipeListState',
    defaults: []
})
@Injectable()
export class FavoriteRecipeListState {
    @Selector()
    static isFavoriteRecipe(state: string[]) {
        return (id: string) => state.includes(id)
    }

    @Action(UpdateFavoriteRecipeList)
    updateFavoriteRecipeList(ctx: StateContext<string[]>, action: UpdateFavoriteRecipeList) {
        const state = ctx.getState()

        const updatedState = (state.includes(action.payload))
            ? state.filter((id) => id !== action.payload)
            : state.concat(action.payload)

        ctx.setState(updatedState)
    }

    @Action(ResetFavoriteRecipeList)
    resetFavoriteRecipeList(ctx: StateContext<string[]>) {
        ctx.setState([])
    }
}