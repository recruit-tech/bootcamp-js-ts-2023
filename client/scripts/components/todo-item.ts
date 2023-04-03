import type { Todo } from "../../../common/types";
import { Component } from "../types.js";
import { parseHTML } from "../utils.js";

type Props = {
  todo: Todo;
};

export const TodoItem: Component<Props> = ({ todo: { id, name } }) => {
  const todo = parseHTML(`
    <li class="todo-item">
      <label class="todo-toggle__container">
        <input
          data-todo-id="${id}"
          type="checkbox"
          class="todo-toggle"
          value="checked"
        />
        <span class="todo-toggle__checkmark"></span>
      </label>
      <div class="todo-name">${name}</div>
    </li>`);

  return todo;
};
