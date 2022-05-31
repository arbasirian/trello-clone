import React, { FC, useState } from "react";

import { CardForm, CardItem, ColumnTitleChange, Modal } from "components";
import { convertCardsMapToArray, generateId } from "helpers";
import { CardModel, ColumnModel, NewCardModel } from "models";

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
  const [showCardModal, setShowCardModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardModel | undefined>();
  const cardsList = convertCardsMapToArray(column.cards);

  const handleChangeColumnName = (title: string) => {
    onUpdate(column.id, {
      ...column,
      title,
    });
    setChangeTitle(false);
  };

  const handleCardAction = (data: NewCardModel) => {
    if (selectedCard?.id) {
      column.cards.set(selectedCard.id, {
        id: selectedCard.id,
        title: data.title,
        description: data.description,
      });

      onUpdate(column.id, column);
      setShowCardModal(false);
      setSelectedCard(undefined);
      return;
    }
    const id = generateId("card", data.title);
    column.cards.set(id, {
      id,
      title: data.title,
      description: data.description,
    });

    onUpdate(column.id, column);
    setShowCardModal(false);
  };

  const handleCancelCardForm = () => {
    setShowCardModal(false);
    setSelectedCard(undefined);
  };

  return (
    <>
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
          <button
            className={styles.AddCard}
            onClick={() => setShowCardModal(true)}
          >
            <Plus /> <span>Add a card</span>
          </button>
        </div>
      </div>
      <Modal visible={showCardModal} onCancel={() => handleCancelCardForm()}>
        <CardForm
          initials={selectedCard}
          column={column.title}
          onSubmit={handleCardAction}
          onCancel={() => handleCancelCardForm()}
        />
      </Modal>
    </>
  );
};

export default CardsColumnComponent;
