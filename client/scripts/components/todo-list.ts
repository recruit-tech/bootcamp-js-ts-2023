import type { Todo } from "../../../common/types.js";
import { Component } from "../types.js";
import { parseHTML } from "../utils.js";
import { TodoItem } from "./todo-item.js";

type Props = {
  todoList: Todo[];
};

export const TodoList: Component<Props> = ({ todoList }) => {
  const wrapper = parseHTML(`
    <div class="todo-list__wrapper">
      <ul class="todo-list"></ul>
    </div>`);

  const ul = wrapper.querySelector("ul.todo-list") as HTMLUListElement;
  todoList
    .map((todo) => TodoItem({ todo }))
    .forEach((elem) => ul.appendChild(elem));

  return wrapper;
};
