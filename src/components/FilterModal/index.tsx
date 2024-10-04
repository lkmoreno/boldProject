import React, { useState } from "react";
import styles from "./filterModa.module.scss";

interface FilterModalProps {
  setIsOpenFilterModal: React.Dispatch<boolean>;
}

const FilterModal: React.FC<FilterModalProps> = ({ setIsOpenFilterModal }) => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const savedFilters = localStorage.getItem("filters");
    return savedFilters
      ? JSON.parse(savedFilters)
      : {
          payTerminalCheck: false,
          payLinkCheck: false,
          payAllChek: false,
        };
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const handleButtonClick = () => {
    localStorage.setItem("filters", JSON.stringify(checkedItems));
    setIsOpenFilterModal(false);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <p className={styles.headerTitle}>Filtrar</p>
        </div>
        <div>
          <button
            onClick={() => setIsOpenFilterModal(false)}
            className={styles.headerButton}
          >
            X
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <label>
            <input
              type="checkbox"
              name="payTerminalCheck"
              checked={checkedItems.payTerminalCheck}
              onChange={handleCheckboxChange}
            />
            Cobro con datáfono
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="payLinkCheck"
              checked={checkedItems.payLinkCheck}
              onChange={handleCheckboxChange}
            />
            Cobro con link de pago
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="payAllChek"
              checked={checkedItems.payAllChek}
              onChange={handleCheckboxChange}
            />
            Ver todos
          </label>
        </div>
      </div>
      <button className={styles.actionButton} onClick={handleButtonClick}>
        Aplicar
      </button>
    </div>
  );
};

export default FilterModal;
