import React, { FC, useState } from "react";

import { CardModel, ColumnModel, NewCardModel } from "models";

import styles from "./card-form.module.scss";
import { Trash2 } from "react-feather";

type Props = {
  initials?: CardModel;
  column: ColumnModel;
  columnsOptions: ColumnModel[];
  onSubmit: (data: NewCardModel) => void;
  onCancel: () => void;
  onDeleteCard: () => void;
};

const CardFormComponent: FC<Props> = ({
  initials,
  column,
  columnsOptions,
  onSubmit,
  onCancel,
  onDeleteCard,
}) => {
  const [cardTitle, setCardTitle] = useState(initials?.title ?? "");
  const [cardDesc, setCardDesc] = useState(initials?.description ?? "");
  const [columnId, setColumnId] = useState(column.id);

  const handleSubmitForm = () => {
    onSubmit({ title: cardTitle, description: cardDesc, columnId });
  };

  return (
    <div>
      <div className={styles.CardFormHeaderContainer}>
        <div className={styles.CardTitle}>
          {initials?.id ? "Update" : "Add New"} Card
        </div>
        {initials?.id && (
          <button
            className={styles.DeleteCardBtn}
            title="delete card"
            onClick={onDeleteCard}
          >
            <Trash2 />
          </button>
        )}
      </div>

      <div className={styles.CardFormContainer}>
        {initials?.id ? (
          <select
            title="column type"
            onChange={(e) => setColumnId(e.target.value)}
            defaultValue={column.id}
          >
            {columnsOptions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        ) : (
          <div className={styles.ColumnBadge}>Column: {column.title}</div>
        )}
        <input
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
          type="text"
          placeholder="Title *"
        />
        <textarea
          value={cardDesc}
          onChange={(e) => setCardDesc(e.target.value)}
          placeholder="Description"
          rows={7}
        />
        <div className={styles.ActionContainer}>
          <button
            disabled={!cardTitle}
            className={styles.SubmitBtn}
            onClick={handleSubmitForm}
          >
            {initials?.id ? "Update" : "Add New"}
          </button>
          <button className={styles.CancelBtn} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFormComponent;
