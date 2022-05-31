import React, { FC, useState } from "react";

import { CardForm, CardItem, ColumnTitleChange, Modal } from "components";
import { convertCardsMapToArray, generateId } from "helpers";
import { CardModel, ColumnModel, NewCardModel } from "models";

import styles from "./cards-column.module.scss";
import { Plus, Trash2 } from "react-feather";

type Props = {
  column: ColumnModel;
  columnsData: Map<string, ColumnModel>;
  onUpdate: (id: string, column: ColumnModel) => void;
  onRemoveColumn: (id: string) => void;
};
const CardsColumnComponent: FC<Props> = ({
  column,
  columnsData,
  onUpdate,
  onRemoveColumn,
}) => {
  const [changeTitle, setChangeTitle] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardModel | undefined>();
  const cardsList = convertCardsMapToArray(column.cards);

  /**
   * Factory function that update column name
   * @param {string} title  - column name
   */
  const handleChangeColumnName = (title: string) => {
    onUpdate(column.id, {
      ...column,
      title,
    });
    setChangeTitle(false);
  };

  /**
   * Update or add new card
   * @param {NewCardModel} data  - card form data
   * @returns {void}
   */
  const handleCardAction = (data: NewCardModel) => {
    // Update card
    if (selectedCard?.id) {
      if (column.id !== data.columnId) {
        const newColumnDetails = columnsData.get(data.columnId);
        const newCardId = generateId("card", data.title);
        // Couldn't fin new columns data
        if (!newColumnDetails) return;

        column.cards.delete(selectedCard.id);
        newColumnDetails.cards.set(newCardId, {
          id: newCardId,
          title: data.title,
          description: data.description,
        });
        onUpdate(column.id, column);
        onUpdate(data.columnId, newColumnDetails);
        setShowCardModal(false);
        setSelectedCard(undefined);
        return;
      }
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

    // Add new card
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

  /**
   * Factory function that delete card
   * @returns {void}
   */
  const handleDeleteCard = () => {
    if (!selectedCard) return;
    column.cards.delete(selectedCard.id);
    onUpdate(column.id, column);
    setShowCardModal(false);
    setSelectedCard(undefined);
    return;
  };

  /**
   * Factory function that select card data and open modal
   * @param {CardModel} card - card details
   */
  const handleUpdateCardDetails = (card: CardModel) => {
    setSelectedCard(card);
    setShowCardModal(true);
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
            <CardItem
              onEdit={() => handleUpdateCardDetails(card.details)}
              key={card.id}
              details={card.details}
            />
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
          column={column}
          onSubmit={handleCardAction}
          onCancel={() => handleCancelCardForm()}
          onDeleteCard={handleDeleteCard}
          columnsOptions={[...columnsData.values()]}
        />
      </Modal>
    </>
  );
};

export default CardsColumnComponent;
