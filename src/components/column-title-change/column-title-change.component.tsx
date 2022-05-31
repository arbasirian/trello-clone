import React, { FC, useState } from "react";
import { Check, X } from "react-feather";

import styles from "./column-title-change.module.scss";

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
    <div className={styles.TitleChangeContainer}>
      <input
        className={styles.TitleChangeInput}
        value={title}
        type="text"
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter list title..."
      />
      <button
        className={styles.Update}
        title="Update Title"
        onClick={() => onUpdate(title)}
      >
        <Check />
      </button>
      <button
        className={styles.Cancel}
        title="Cancel Update"
        onClick={() => onCancel()}
      >
        <X />
      </button>
    </div>
  );
};

export default ColumnTitleChangeComponent;
