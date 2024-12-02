import { Role } from "../enum/role.enum"
import { RecipeSimple } from "./recipe-simple"
import { Comment } from "./comment"

export interface UserFull {
    username: string,
    role: Role,
    firstName: string,
    lastName: string,
    middleName: string,
    avatar: string,
    userAgent: string,
    createdOn: string,
    updatedOn: string,
    lastEntry: string,
    isActive: boolean,
    posts: RecipeSimple[],
    comments: Comment[],
    id: string
}
