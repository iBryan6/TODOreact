import React from "react";

export default props => (
  <li>
    <input onChange={props.handleDelete}
      type="checkbox"
    />
    {props.text}
  </li>
);
