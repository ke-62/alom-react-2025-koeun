import { List, ListItem, DeleteButton } from "./styles/StyledComponents";

function TodoList({ todos, onDelete }) {
  return (
    <List>
      {todos.map((item, index) => (
        <ListItem key={index}>
          {item}
          <DeleteButton onClick={() => onDelete(index)}>❌</DeleteButton>
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;