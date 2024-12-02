import { Author } from "./author";

export interface Comment {
    id: string,
    postId: string,
    user?: Author,
    text: string,
    createdOn: string,
    updatedOn: string
}
