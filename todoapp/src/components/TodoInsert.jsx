import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback((e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <form className="flex bg-black" onSubmit={onSubmit}>
      <input
        type="text"
        className="grow p-2 text-gray-400 placeholder:text-gray-400 focus:outline-none"
        placeholder="할 일 입력"
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className="p-2 bg-gray-300 cursor-pointer hover:bg-gray-500">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
