import React from "react";

const BookForm = () => {
  return (
    <form className="flex flex-col gap-2.5 mt-6">
      <input type="text" placeholder="title" required className="border-2 border-stone-300 p-2 rounded-xs" />
      <input type="text" placeholder="author" required className="border-2 border-stone-300 p-2 rounded-xs" />
      <select name="" id="" className="border-2 border-stone-300 p-2 rounded-xs">
        <option value="">Select Genre</option>
      </select>
      <input type="text" placeholder="Published Date" required className="border-2 border-stone-300 p-2 rounded-xs" />
      <label htmlFor="">
        <input type="checkbox" required className="border-2 border-stone-300 p-2 rounded-xs mr-1.5" />
        Available
      </label>
      <div className="text-center p-2">
        <button type="submit" className="bg-sky-700">
          Add
        </button>
        <button type="button" className="bg-red-700">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default BookForm;
