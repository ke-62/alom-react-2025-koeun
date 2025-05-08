import { Form, Input, Button } from "./styles/StyledComponents";

function TodoForm({ toDo, onChange, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <Input value={toDo} onChange={onChange} placeholder="할 일을 입력하세요" />
      <Button type="submit">Add To Do</Button>
    </Form>
  );
}

export default TodoForm;