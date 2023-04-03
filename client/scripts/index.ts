import { App } from "./components/app.js";
import { store } from "./store.js";

store.subscribe((state) => {
  const renderTarget = document.querySelector("main") as HTMLElement;
  renderTarget.innerHTML = "";
  renderTarget.appendChild(App({ todoList: state.todoList }));
});

store.dispatch({ type: "FETCH_TODO_LIST", payload: undefined });
