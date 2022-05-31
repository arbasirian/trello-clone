import React, { FC, useState } from "react";
import { X } from "react-feather";

import styles from "./column-form.module.scss";

type Props = {
  onSubmit: (data: string) => void;
  onCancel: () => void;
};
const ColumnFormComponent: FC<Props> = ({ onSubmit }) => {
  const [columnTitle, setColumnTitle] = useState("");
  return (
    <div className={styles.ColumnFormContainer}>
      <input
        className={styles.TitleInput}
        onChange={(event) => setColumnTitle(event.target.value)}
        placeholder="Enter list title..."
      />
      <div className={styles.ActionContainer}>
        <button
          className={styles.SubmitButton}
          onClick={() => onSubmit(columnTitle)}
        >
          Add List
        </button>
        <button className={styles.CancelBtn} title="Cancel add">
          <X />
        </button>
      </div>
    </div>
  );
};

export default ColumnFormComponent;
