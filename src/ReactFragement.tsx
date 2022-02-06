import React, { Fragment } from "react";

const items = ["Item 1", "Item 2", "Item 3"];

export function ReactFragement() {
  return (
    <Fragment>
      <div>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </div>
      <div>
        <p>Paragraph div 1</p>
        <p>Paragraph div 2</p>
      </div>
      {items.map((item) => (
        <Fragment key={item}>
          <p>{item}</p>
        </Fragment>
      ))}
    </Fragment>
  );
}
