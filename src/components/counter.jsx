import React from "react";

const Counter = (props) => {
  const { id, value, name } = props;

  const formatValue = () => {
    return value === 0 ? "Empty" : value;
  };

  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  return (
    <div>
      <span>{name}</span>
      <span className={getBageClasses()}>{formatValue()}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={props.onIncrement.bind(null, id)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={props.onDecrement.bind(null, id)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={props.onDelete.bind(null, id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
