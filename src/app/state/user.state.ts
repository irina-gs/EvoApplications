import { Injectable } from "@angular/core";
import { User } from "../interfaces/user";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { Role } from "../enum/role.enum";
import { ResetUser, UpdateUser } from "./model/user.model";
import { ResetFavoriteRecipeList } from "./model/favorite-recipe-list.model";

export const DEFAULT_USER_STATE: User = {
    id: null,
    role: Role.Guest,
    firstName: null,
    lastName: null,
    middleName: null,
    avatar: null,
    username: null,
    jwtToken: null,
    expiresIn: null
}

@State<User>({
    name: 'UserState',
    defaults: DEFAULT_USER_STATE
})
@Injectable()
export class UserState {
    constructor(private store: Store) { }

    @Selector()
    static getId(state: User) {
        return state.id
    }

    @Selector()
    static getFirstName(state: User) {
        return state.firstName
    }

    @Selector()
    static getLastName(state: User) {
        return state.lastName
    }

    @Selector()
    static getMiddleName(state: User) {
        return state.middleName
    }

    @Selector()
    static getAvatar(state: User) {
        return state.avatar
    }

    @Selector()
    static getRole(state: User) {
        return state.role
    }

    @Selector()
    static getUsername(state: User) {
        return state.username
    }

    @Selector()
    static getToken(state: User) {
        return state.jwtToken
    }

    @Selector()
    static getExpiresIn(state: User) {
        return state.expiresIn
    }

    @Action(UpdateUser)
    updateUser(ctx: StateContext<User>, action: UpdateUser) {
        ctx.patchState({
            id: action.payload.id,
            role: action.payload.role,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            middleName: action.payload.middleName,
            avatar: action.payload.avatar,
            username: action.payload.username,
            jwtToken: action.payload.jwtToken,
            expiresIn: action.payload.expiresIn
        })
    }

    @Action(ResetUser)
    resetState(ctx: StateContext<User>) {
        ctx.patchState(DEFAULT_USER_STATE)
        this.store.dispatch(new ResetFavoriteRecipeList())
    }
}