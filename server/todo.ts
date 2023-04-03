import express from "express";
import { Todo } from "../common/types";

let todoList: Todo[] = [];

const router = express.Router();
router.post("/", (req, res) => {
  const id = todoList.length ? todoList[todoList.length - 1].id + 1 : 0;
  const todo = { id, name: req.body.name };

  todoList.push(todo);
  return res.status(201).send(todo);
});

router.get("/", (_, res) => {
  return res.send({ todoList: todoList });
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = todoList.findIndex((todo) => todo.id == id);
  todoList.splice(index, 1);
  return res.status(204).send("done");
});

export const todoRouter = router;
