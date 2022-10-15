import { v4 as uuidv4 } from 'uuid';

export class Todo {

    static fromJson({id, task, completed, createdAt}) {
        const tempTodo = new Todo(task);
        tempTodo.id = id;
        tempTodo.completed = completed;
        tempTodo.createdAt = createdAt;

        return tempTodo;
    }

    constructor(task) {
        this.task = task;
        this.id = uuidv4();
        this.completed = false;
        this.createdAt = new Date()
    }
}