import PropTypes from "prop-types";
import React from "react";

const InputWithValidator = React.forwardRef(
  ({ error, ...otherProps }: any, ref) => {
    return (
      <div className="flex flex-col">
        <input
          className={`mt-2 p-2 border-2 rounded-lg ${
            error ? `border-red-500` : ``
          }`}
          {...otherProps}
        />
        {error?.message ? (
          <span className="text-sm mt-1 ml-2 text-red-500">
            {error.message}
          </span>
        ) : (
          <div className="mt-1" style={{ height: "20px" }}></div>
        )}
      </div>
    );
  }
);

InputWithValidator.propTypes = {
  error: PropTypes.object,
};

InputWithValidator.displayName = "InputWithValidator";

export default InputWithValidator;
