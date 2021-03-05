import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./component/InputTodo.jsx";
import { InCompleteTodos } from "./component/InCompleteTodos.jsx";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [inCompleteTodos, setInCompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  const onClickAdd = () => {
    if (todoText === "") return;
    const newInCompleteTodos = [...inCompleteTodos, todoText];
    setInCompleteTodos(newInCompleteTodos);
    setTodoText("");
  };
  const onclickDelete = (index) => {
    const newInCompleteTodos = [...inCompleteTodos];
    newInCompleteTodos.splice(index, 1);
    setInCompleteTodos(newInCompleteTodos);
  };
  const onClickComplete = (index) => {
    const newInCompleteTodos = [...inCompleteTodos];
    newInCompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, inCompleteTodos[index]];
    setInCompleteTodos(newInCompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newInCompleteTodos = [...inCompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setInCompleteTodos(newInCompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <InCompleteTodos todos={} />
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
