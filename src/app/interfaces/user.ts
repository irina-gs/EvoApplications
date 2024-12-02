import { Role } from "../enum/role.enum";

export interface User {
    id: string | null,
    role: Role,
    firstName: string | null,
    lastName: string | null,
    middleName: string | null,
    avatar: string | null,
    username: string | null,
    jwtToken: string | null,
    expiresIn: number | null
}
