import React, { FC, useState } from "react";

import { CardModel, NewCardModel } from "models";

import styles from "./card-form.module.scss";

type Props = {
  initials?: CardModel;
  column: string;
  onSubmit: (data: NewCardModel) => void;
  onCancel: () => void;
};

const CardFormComponent: FC<Props> = ({
  initials,
  onSubmit,
  onCancel,
  column,
}) => {
  const [cardTitle, setCardTitle] = useState(initials?.title ?? "");
  const [cardDesc, setCardDesc] = useState(initials?.description ?? "");

  const handleSubmitForm = () => {
    onSubmit({ title: cardTitle, description: cardDesc });
  };

  return (
    <div>
      <div className={styles.CardFormHeaderContainer}>
        <div className={styles.CardTitle}>
          {initials?.id ? "Update" : "Add New"} Card
        </div>
        <div className={styles.ColumnBadge}>Column: {column}</div>
      </div>
      <div className={styles.CardFormContainer}>
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
