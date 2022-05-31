import React, { FC, useState } from "react";

import { CardItem, ColumnTitleChange } from "components";
import { convertCardsMapToArray } from "helpers";
import { ColumnModel } from "models";

import styles from "./cards-column.module.scss";
import { Trash2 } from "react-feather";

type Props = {
  column: ColumnModel;
  onUpdateTitle: (id: string, column: ColumnModel) => void;
  onRemoveColumn: (id: string) => void;
};
const CardsColumnComponent: FC<Props> = ({
  column,
  onUpdateTitle,
  onRemoveColumn,
}) => {
  const [changeTitle, setChangeTitle] = useState(false);
  const cardsList = convertCardsMapToArray(column.cards);

  console.log("changeTitle", column.title, changeTitle);

  const handleChangeColumnName = (title: string) => {
    onUpdateTitle(column.id, {
      ...column,
      title,
    });
    setChangeTitle(false);
  };
  return (
    <div className={styles.ColumnContainer}>
      <div className={styles.ColumnHeader}>
        <div className={styles.ColumnHeaderTitleContainer}>
          {changeTitle ? (
            <ColumnTitleChange
              columnTitle={column.title}
              onCancel={() => {
                setChangeTitle(false);
              }}
              onUpdate={handleChangeColumnName}
            />
          ) : (
            <div
              onClick={() => setChangeTitle(true)}
              className={styles.ColumnHeaderTitle}
            >
              {column.title}
            </div>
          )}
        </div>
        <button
          className={styles.RemoveColumn}
          title="Remove column"
          onClick={() => onRemoveColumn(column.id)}
        >
          <Trash2 />
        </button>
      </div>
      <div>
        {cardsList.map((card) => (
          <CardItem key={card.id} details={card.details} />
        ))}
      </div>
      <div className={styles.ColumnFooter}>
        <button className={styles.AddCard}>+ Add a card</button>
      </div>
    </div>
  );
};

export default CardsColumnComponent;
