import './style.css';

import { TodoList } from "./classes/index.js";
import { createTodoHTML } from './js/components.js';
export const todoList = new TodoList();

todoList.todos.forEach(todo => createTodoHTML(todo));
