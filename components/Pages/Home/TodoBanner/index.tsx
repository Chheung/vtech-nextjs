import React from "react";
import PropTypes from "prop-types";
import { Todo } from "@/commons";

const TodoBanner = ({
  item,
  ...props
}: {
  item: Todo;
  onEdit?: Function;
  onRemove?: Function;
  onComplete?: Function;
}) => {
  return (
    <div
      key={item.todo}
      className="my-2 break-all flex justify-between px-5 py-2 border-2 border-grey-500 rounded-lg"
      style={{ width: "500px" }}
    >
      <div style={{ maxWidth: "80%" }}>{item.todo}</div>
      <div>
        <div className="flex flex-col">
          <button
            onClick={() => props.onComplete?.(item)}
            className="ml-3 px-5 bg-green-400 text-white bg-rounded rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button
            onClick={() => props.onEdit?.(item)}
            className="ml-3 mt-2 px-5 bg-blue-400 text-white bg-rounded rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button
            onClick={() => props.onRemove?.(item)}
            className="ml-3 mt-2  px-5 bg-red-400 text-white bg-rounded rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

TodoBanner.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TodoBanner;
