import React, { useState } from "react";

import { CardsColumn } from "components";
import { ColumnModel } from "models";
import { INITIAL_COLUMNS } from "data/columns";

import styles from "./App.module.scss";

function App() {
  const [columns, setColumn] =
    useState<Map<string, ColumnModel>>(INITIAL_COLUMNS);

  const handleAddNewColumn = () => {};

  /**
   *
   * @param {string} id - column id
   * @param {ColumnModel} updatedColumn - updated column data
   */
  const handleUpdate = (id: string, updatedColumn: ColumnModel): void => {
    setColumn((prev) => new Map(prev.set(id, updatedColumn)));
  };

  const handleRemoveColumn = (id: string) => {
    setColumn((prev) => {
      prev.delete(id);
      return new Map(prev);
    });
  };

  return (
    <div className={styles.PageContainer}>
      <h1>Todo Board</h1>
      <div className={styles.ColumnsContainer}>
        {[...columns].map((column) => (
          <CardsColumn
            key={column[0]}
            column={column[1]}
            onUpdateTitle={handleUpdate}
            onRemoveColumn={handleRemoveColumn}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
