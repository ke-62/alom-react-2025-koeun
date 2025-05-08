import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 80px auto;
  padding: 30px;
  background-color: #f0f4fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  font-family: 'Arial', sans-serif;
`;

export const Title = styled.h1`
  text-align: center;
  color: #2b3a55;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  margin-left: 10px;
  padding: 10px 16px;
  font-size: 16px;
  color: white;
  background-color: #4682b4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  background: white;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  font-size: 20px;
  cursor: pointer;
`;