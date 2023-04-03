import type { Todo } from "../../../common/types.js";
import { Component } from "../types.js";
import { parseHTML } from "../utils.js";
import { Hero } from "./hero.js";
import { TodoForm } from "./todo-form.js";
import { TodoList } from "./todo-list.js";

type Props = { todoList: Todo[] };

export const App: Component<Props> = ({ todoList }) => {
  const wrapper = parseHTML(`<div class="app"></div>`);

  wrapper.appendChild(Hero({}));
  wrapper.appendChild(TodoForm({}));
  wrapper.appendChild(TodoList({ todoList }));

  return wrapper;
};
