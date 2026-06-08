export default function TodoCount({ todos }) {
  const isDone = todos.filter((todo) => todo.done === true).length;

  return (
    <div className="mt-[-10px] text=[14px] text-gray-600">
      완료: {isDone} / 할 일: {todos.length}
    </div>
  );
}
