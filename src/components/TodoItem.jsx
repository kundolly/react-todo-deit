import CheckBox from '@/components/common/CheckBox';

export default function TodoItem({ todo, todos, setTodos }) {
  function handleDone() {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, done: !t.done };
        } else {
          return t;
        }
      }),
    );
  }

  function hadleDelete() {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  return (
    <li className="flex">
      <CheckBox
        label={todo.text}
        checked={todo.done}
        onChange={handleDone}
        className={`grow ${todo.done ? 'line-through' : ''}`}
      />
      <button
        type="button"
        className="h-[32px] px-[10px] text-gray-500 border border-[#b83030] rounded-[4px] shrink-0"
        onClick={hadleDelete}>
        삭제
      </button>
    </li>
  );
}
