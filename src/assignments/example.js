import { useState, useEffect } from "react";
import  useLocalStorage from "../hooks/useLocalStorage";
import { Container, Title } from "../components/styles/StyledComponents";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function Example() {
  // 과제1-1: 7-1, 7-2강을 듣고 이곳에 투두리스트 컴포넌트를 작성해주세요.
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useLocalStorage("toDos", []);
  
  

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  const deleteToDo = (index) => {
    setToDos((currentArray) =>
      currentArray.filter((_, itemIndex) => itemIndex !== index)
    );
  };

  return (
    <Container>
      <Title>My To Dos ({toDos.length})</Title>
      <TodoForm toDo={toDo} onChange={onChange} onSubmit={onSubmit} />
      <hr />
      <TodoList todos={toDos} onDelete={deleteToDo} />
    </Container>
  );
}

export default Example;