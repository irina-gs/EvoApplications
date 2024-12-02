import { Role } from "../enum/role.enum"

export interface UserSimple {
    id: string,
    username: string,
    role: Role,
    firstName: string,
    lastName: string,
    middleName: string,
    avatar: string,
    createdOn: string,
    updatedOn: string,
    lastEntry: string,
    isActive: boolean
}
