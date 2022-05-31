import React, { FC } from "react";
import { MoreHorizontal } from "react-feather";

import { CardModel } from "models";

import styles from "./card-item.module.scss";

type Props = {
  details: CardModel;
  onEdit: () => void;
};
const CardItemComponent: FC<Props> = ({ details, onEdit }) => {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.TitleWrapper}>
        <div className={styles.CardTitle}>{details.title}</div>
        <button
          className={styles.EditCardBtn}
          onClick={onEdit}
          title="edit card"
        >
          {" "}
          <MoreHorizontal />
        </button>
      </div>
      <div className={styles.Description}>{details.description}</div>
    </div>
  );
};

export default CardItemComponent;
