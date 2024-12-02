import { User } from "src/app/interfaces/user";

export class UpdateUser {
    static readonly type = '[User]: Update User'

    constructor(public payload: User) { }
}

export class ResetUser {
    static readonly type = '[User] Reset User'
}