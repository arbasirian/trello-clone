import { CardModel } from "models";
import React, { FC } from "react";

import styles from "./card-item.module.scss";

type Props = {
  details: CardModel;
};
const CardItemComponent: FC<Props> = ({ details }) => {
  return (
    <div className={styles.CardContainer}>
      <div>{details.title}</div>
      <div>{details.description}</div>
    </div>
  );
};

export default CardItemComponent;
