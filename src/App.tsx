import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";

export default function App() {
  const [todos, setTodos] = useState<any>([]);

  const onClickFetchData = () => {
    axios.get("http://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
      console.log(res);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userid} />
      ))}
    </div>
  );
}
