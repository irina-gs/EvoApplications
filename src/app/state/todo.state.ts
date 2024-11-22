import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddTodo, DeleteTodo, TodoInterface, ToggleCompletion } from "./model/todo.model";
import { Injectable } from "@angular/core";

@State<TodoInterface[]>({
    name: 'TodoState',
    defaults: []
})
@Injectable()
export class TodoState {
    private idCounter: number = 0

    @Selector()
    static getTodoList(state: TodoInterface[]) {
        return state
    }

    @Action(AddTodo)
    addTodo(ctx: StateContext<TodoInterface[]>, action: AddTodo) {
        const state = ctx.getState()
        const newTodo: TodoInterface = {
            id: this.idCounter++,
            text: action.payload.text,
            isCompleted: action.payload.isCompleted
        }
        const updatedState = [newTodo].concat(state)

        ctx.setState(updatedState)
    }

    @Action(ToggleCompletion)
    toggleCompletion(ctx: StateContext<TodoInterface[]>, action: ToggleCompletion) {
        const state = ctx.getState()
        const todo = state.find((todo) => todo.id === action.id)

        if (todo) {
            todo.isCompleted = !todo.isCompleted

            const updatedState = state.filter((todo) => todo.id !== action.id);
            (todo.isCompleted) ? updatedState.push(todo) : updatedState.unshift(todo)

            ctx.setState(updatedState)
        }
    }

    @Action(DeleteTodo)
    deleteTodo(ctx: StateContext<TodoInterface[]>, action: DeleteTodo) {
        const state = ctx.getState()
        const updatedState = state.filter((todo) => todo.id !== action.id)

        ctx.setState(updatedState)
    }
}