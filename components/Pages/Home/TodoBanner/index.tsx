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
            onClick={() => props.onEdit?.(item)}
            className="ml-3 px-5 bg-red-400 text-white bg-rounded rounded-lg"
          >
            X
          </button>
          <button
            onClick={() => props.onRemove?.(item)}
            className="ml-3  mt-2 px-5 bg-blue-400 text-white bg-rounded rounded-lg"
          >
            Edit
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
