import { store } from "../store.js";
import { Component } from "../types.js";
import { parseHTML } from "../utils.js";

type Props = {};

export const TodoForm: Component<Props> = () => {
  const wrapper = parseHTML(`
  <div class="todo-form__wrapper">
    <form method="POST" action="/todos" class="todo-form">
      <label for="name" class="todo-form__label">TODO</label>
      <div class="todo-form-input__wrapper">
        <input id="name" name="name" type="text" class="todo-form__input" />
        <input type="submit" class="todo-form__submit" value="Submit"></input>
      </div>
    </form>
  </div>`);

  const button = wrapper.querySelector(
    ".todo-form__submit"
  ) as HTMLButtonElement;
  const form = wrapper.querySelector(".todo-form__input") as HTMLFormElement;
  button.addEventListener("click", (e) => {
    e.preventDefault();
    store.dispatch({ type: "ADD_TODO", payload: { name: form.value } });
    form.value = "";
  });

  return wrapper;
};
