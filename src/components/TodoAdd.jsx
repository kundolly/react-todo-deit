import { useRef, useState } from 'react';

export default function TodoAdd({ todos, setTodos }) {
  const [txt, setTxt] = useState('');
  const inputRef = useRef(null);

  function handleAdd() {
    if (txt.trim()) {
      setTodos([...todos, { id: Date.now(), text: txt, done: false }]);
      setTxt('');
      inputRef.current.focus();
    }
  }

  function hadleEnter(e) {
    if (e.key === 'Enter') {
      handleAdd();
    }
  }

  return (
    <div className="flex my-[10px] gap-x-[10px]">
      <input
        className="w-full rounded-[4px] text-gray-600 border-[#ddd]"
        type="text"
        placeholder="할 일을 입력하세요."
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
        ref={inputRef}
        onKeyUp={hadleEnter}
      />
      <button
        type="button"
        onClick={handleAdd}
        className="btn bg-gray-600 px-[10px] shrink-0 rounded-[4px] text-[#fff]">
        추가
      </button>
    </div>
  );
}
