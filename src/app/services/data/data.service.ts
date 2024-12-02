import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCommentRequest } from 'src/app/interfaces/add-comment-request';
import { AddCommentResponse } from 'src/app/interfaces/add-comment-response';
import { AuthorizationRequest } from 'src/app/interfaces/authorization-request';
import { DeleteResponse } from 'src/app/interfaces/delete-response';
import { Recipe } from 'src/app/interfaces/recipe';
import { Registration } from 'src/app/interfaces/registration';
import { User } from 'src/app/interfaces/user';
import { UserFull } from 'src/app/interfaces/user-full';
import { UserSimple } from 'src/app/interfaces/user-simple';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private baseUrl: string = 'https://evo-academy.wckz.dev'

    constructor(private http: HttpClient) { }

    signIn(body: AuthorizationRequest, isFast: boolean) {
        return this.http.post<User>(`${this.baseUrl}/api/cooking-blog/users/sign`, body, { params: { fastJwt: isFast } })
    }

    signUp(body: Registration) {
        return this.http.post<Registration>(`${this.baseUrl}/api/cooking-blog/users/registration`, body)
    }

    getRecipes() {
        return this.http.get<Recipe[]>(`${this.baseUrl}/api/cooking-blog/posts`)
    }

    getRecipe(id: string) {
        return this.http.get<Recipe>(`${this.baseUrl}/api/cooking-blog/posts/${id}`)
    }

    addComment(id: string, body: AddCommentRequest) {
        return this.http.post<AddCommentResponse>(`${this.baseUrl}/api/cooking-blog/posts/${id}/add-comment`, body, { headers: { 'Needs-Auth': 'true' } })
    }

    createRecipe(body: Recipe) {
        return this.http.post<Recipe>(`${this.baseUrl}/api/cooking-blog/posts/create`, body, { headers: { 'Needs-Auth': 'true' } })
    }

    getUsers() {
        return this.http.get<UserSimple[]>(`${this.baseUrl}/api/cooking-blog/users`, { headers: { 'Needs-Auth': 'true' } })
    }

    deleteUser(id: string) {
        return this.http.delete<DeleteResponse>(`${this.baseUrl}/api/cooking-blog/users/${id}`, { headers: { 'Needs-Auth': 'true' } })
    }

    getUser(id: string) {
        return this.http.get<UserFull>(`${this.baseUrl}/api/cooking-blog/users/${id}`, { headers: { 'Needs-Auth': 'true' } })
    }

    deleteRecipe(id: string) {
        return this.http.delete<DeleteResponse>(`${this.baseUrl}/api/cooking-blog/posts/${id}`, { headers: { 'Needs-Auth': 'true' } })
    }

    updateRecipe<T>(body: T, id: string) {
        return this.http.patch<T>(`${this.baseUrl}/api/cooking-blog/posts/${id}`, body, { headers: { 'Needs-Auth': 'true' } })
    }

    getFirstRecipes(recipes: Recipe[], count: number) {
        return recipes.slice(0, count)
    }

    getRandomRecipes(recipes: Recipe[], count: number) {
        const randomRecipeList: Recipe[] = []
        const indexSet: Set<number> = new Set()

        while (randomRecipeList.length < count && indexSet.size < recipes.length) {
            const index = Math.floor(Math.random() * recipes.length)

            if (!indexSet.has(index)) {
                randomRecipeList.push(recipes[index])
                indexSet.add(index)
            }
        }

        return randomRecipeList
    }
}
