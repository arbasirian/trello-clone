import { ColumnModel } from "models";
import React, { FC, useState } from "react";

type Props = {
  initials?: ColumnModel;
  onSubmit: (data: string) => void;
};
const ColumnFormComponent: FC<Props> = ({ initials, onSubmit }) => {
  const [columnTitle, setColumnTitle] = useState(initials?.title ?? "");
  return (
    <div>
      <input
        onChange={(event) => setColumnTitle(event.target.value)}
        placeholder="Enter list title..."
      />
      <button onClick={() => onSubmit(columnTitle)}>Add List</button>
      <button>X</button>
    </div>
  );
};

export default ColumnFormComponent;
