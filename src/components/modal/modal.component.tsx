import React, { FC, ReactNode } from "react";

import styles from "./modal.module.scss";

type Props = {
  children: ReactNode;
  visible: boolean;
  onCancel: () => void;
};
const ModalComponent: FC<Props> = ({ children, visible, onCancel }) => {
  return (
    <>
      {visible && (
        <div className={styles.BaseModalContainer} onClick={onCancel}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={styles.ModalContainer}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
