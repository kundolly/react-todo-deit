import { useState } from 'react';
import TodoCount from '@/components/TodoCount';
import TodoList from '@/components/TodoList';
import TodoAdd from '@/components/TodoAdd';
import TextareaAutosize from 'react-textarea-autosize';

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="p-[20px]">
      <h2 className="text-[30px] font-bold text-gray-600 mb-[20px]">
        Todo List
      </h2>
      <TodoCount todos={todos} />
      <TodoAdd todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <TextareaAutosize />
    </div>
  );
}
