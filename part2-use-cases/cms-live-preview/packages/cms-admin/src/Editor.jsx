import React from "react";
import { useMutation } from "react-query";

import { postPage } from "./api";

const Editor = ({
  title = "",
  text = "",
  img1 = "",
  img2 = "",
  img3 = "",
  page = "",
  onChange = () => {},
  host = "",
}) => {
  const { mutate } = useMutation(postPage(host));

  const onSave = () => {
    mutate({
      page,
      title,
      text,
      img1,
      img2,
      img3,
    });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(evt) => onChange("title", evt.target.value)}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      />
      <textarea
        placeholder="Text"
        value={text}
        onChange={(evt) => onChange("text", evt.target.value)}
        className="mt-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      />
      <input
        type="text"
        placeholder="Image 1"
        value={img1}
        onChange={(evt) => onChange("img1", evt.target.value)}
        className="mt-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      />
      <input
        type="text"
        placeholder="Image 2"
        value={img2}
        onChange={(evt) => onChange("img2", evt.target.value)}
        className="mt-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      />
      <input
        type="text"
        placeholder="Image 3"
        value={img3}
        onChange={(evt) => onChange("img3", evt.target.value)}
        className="mt-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      />
      <button
        type="primary"
        onClick={onSave}
        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save
      </button>
    </form>
  );
};

export default Editor;
