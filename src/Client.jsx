import React, { Component } from "react";

function Client({ details, onDelete }) {
  return (
    <li>
      {details.name}{" "}
      <button class="deleteButton" onClick={() => onDelete(details.id)}>
        X
      </button>
    </li>
  );
}

export default Client;
