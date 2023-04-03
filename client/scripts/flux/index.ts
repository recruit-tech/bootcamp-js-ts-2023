import type { Todo } from "../../../common/types";

/**
 * Dispatcher
 */
class Dispatcher extends EventTarget {
  dispatch() {
    this.dispatchEvent(new CustomEvent("event"));
  }

  subscribe(subscriber: EventListenerOrEventListenerObject | null) {
    this.addEventListener("event", subscriber);
  }
}

/**
 * Action Types
 */
export type Action =
  | {
      type: "FETCH_TODO_LIST";
      payload: undefined;
    }
  | {
      type: "ADD_TODO";
      payload: { name: Todo["name"] };
    };

/**
 * Store Creator
 */
const api = "http://localhost:3000/todo";

export type State = {
  todoList: Todo[];
};
const defaultState: State = {
  todoList: [],
};

const headers = {
  "Content-Type": "application/json; charset=utf-8",
};

const reducer = async (
  prevState: State,
  { type, payload }: Action
): Promise<State> => {
  switch (type) {
    case "FETCH_TODO_LIST": {
      try {
        const resp = await fetch(api).then((d) => d.json());
        return { todoList: resp.todoList };
      } catch (err: unknown) {
        console.error(err);
        return { ...prevState };
      }
    }
    case "ADD_TODO": {
      const body = JSON.stringify(payload);
      const config = { method: "POST", body, headers };
      try {
        const resp = await fetch(api, config).then((d) => d.json());
        return { todoList: [...prevState.todoList, resp] };
      } catch (err) {
        console.error(err);
        return { ...prevState };
      }
    }
  }
};

export function createStore(initialState = defaultState) {
  const dispatcher = new Dispatcher();
  let state = initialState;

  const dispatch = async (action: Action) => {
    console.group(action.type);
    console.log("prev", state);
    state = await reducer(state, action);
    console.log("next", state);
    console.groupEnd();
    dispatcher.dispatch();
  };

  const subscribe = (subscriber: (state: State) => void) => {
    dispatcher.subscribe(() => subscriber(state));
  };

  return {
    dispatch,
    subscribe,
  };
}
