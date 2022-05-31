import React, { FC, useState } from "react";

import { CardItem, ColumnTitleChange } from "components";
import { convertCardsMapToArray } from "helpers";
import { ColumnModel } from "models";

import styles from "./cards-column.module.scss";
import { Plus, Trash2 } from "react-feather";

type Props = {
  column: ColumnModel;
  onUpdate: (id: string, column: ColumnModel) => void;
  onRemoveColumn: (id: string) => void;
};
const CardsColumnComponent: FC<Props> = ({
  column,
  onUpdate,
  onRemoveColumn,
}) => {
  const [changeTitle, setChangeTitle] = useState(false);
  const cardsList = convertCardsMapToArray(column.cards);

  const handleChangeColumnName = (title: string) => {
    onUpdate(column.id, {
      ...column,
      title,
    });
    setChangeTitle(false);
  };

  const handleAddNewCard = () => {
    column.cards.set("test", {
      title: "test",
      id: "test",
      description: "test here",
    });

    onUpdate(column.id, column);
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
      <div className={styles.CardsContainer}>
        {cardsList.map((card) => (
          <CardItem key={card.id} details={card.details} />
        ))}
      </div>
      <div className={styles.ColumnFooter}>
        <button className={styles.AddCard} onClick={handleAddNewCard}>
          <Plus /> <span>Add a card</span>
        </button>
      </div>
    </div>
  );
};

export default CardsColumnComponent;
