import React, { FC, useState } from "react";
import { Check, Plus, X } from "react-feather";

type Props = {
  columnTitle: string;
  onUpdate: (data: string) => void;
  onCancel: () => void;
};
const ColumnTitleChangeComponent: FC<Props> = ({
  columnTitle,
  onUpdate,
  onCancel,
}) => {
  const [title, setTitle] = useState(columnTitle);

  return (
    <div>
      <input
        value={title}
        type="text"
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter list title..."
      />
      <button title="Update Title" onClick={() => onUpdate(title)}>
        <Check />
      </button>
      <button title="Cancel Update" onClick={() => onCancel()}>
        <X />
      </button>
    </div>
  );
};

export default ColumnTitleChangeComponent;
