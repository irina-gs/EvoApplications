export class UpdateFavoriteRecipeList {
    static readonly type = '[Favorite Recipe List]: Update Favorite Recipe List'

    constructor(public payload: string) { }
}

export class ResetFavoriteRecipeList {
    static readonly type = '[Favorite Recipe List]: Reset Favorite Recipe List'
}