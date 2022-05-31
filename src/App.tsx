import React, { useState } from "react";

import { CardsColumn, ColumnForm } from "components";
import { ColumnModel } from "models";
import { INITIAL_COLUMNS } from "data/columns";

import styles from "./App.module.scss";
import { Plus } from "react-feather";
import { generateId } from "helpers";

function App() {
  const [showAddColumn, setShowAddColumn] = useState(false);
  const [columns, setColumn] =
    useState<Map<string, ColumnModel>>(INITIAL_COLUMNS);

  const handleAddNewColumn = (title: string) => {
    const id = generateId("column", title);

    setColumn(
      (prev) =>
        new Map(
          prev.set(id, {
            id,
            cards: new Map(),
            title,
          })
        )
    );
    setShowAddColumn(false);
  };

  /**
   * Factory function that update column
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
            onUpdate={handleUpdate}
            onRemoveColumn={handleRemoveColumn}
          />
        ))}
        <div className={styles.NewColumnContainer}>
          {showAddColumn ? (
            <ColumnForm
              onSubmit={handleAddNewColumn}
              onCancel={() => setShowAddColumn(false)}
            />
          ) : (
            <button
              className={styles.NewColumn}
              onClick={() => setShowAddColumn(true)}
            >
              <Plus /> <span>Add a card</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
