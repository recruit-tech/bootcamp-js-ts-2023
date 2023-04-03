import { Component } from "../types.js";
import { parseHTML } from "../utils.js";

type Props = {};

export const Hero: Component<Props> = () => {
  const hero = parseHTML(`<div class="hero">TODO-Manager</div>`);

  return hero;
};
