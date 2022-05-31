import React, { FC, ReactNode } from "react";

import styles from "./modal.module.scss";

type Props = {
  children: ReactNode;
};
const ModalComponent: FC<Props> = ({ children }) => {
  return <div className={styles.ModalContainer}>{children}</div>;
};

export default ModalComponent;
