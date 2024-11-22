export interface TodoInterface {
    id?: number,
    text: string,
    isCompleted: boolean
}

export class AddTodo {
    static readonly type = '[Todo]: Add Todo'

    constructor(public payload: TodoInterface) { }
}

export class ToggleCompletion {
    static readonly type = '[Todo]: Toggle Completion'

    constructor(public id: number) { }
}

export class DeleteTodo {
    static readonly type = '[Todo]: Delete Todo'

    constructor(public id: number) { }
}
