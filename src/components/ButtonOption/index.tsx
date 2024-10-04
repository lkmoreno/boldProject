import React from "react";
import styles from "./buttonOption.module.scss";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { TypeFilterSelected } from "../../const";
import { ButtonDateOptionProps } from "./types";


const ButtonDateOption: React.FC<ButtonDateOptionProps> = ({
  setFilterDate,
  filterDate,
}) => {
  const actualMonth = format(new Date(), "MMMM", { locale: es });
  const handleClickDate = (selectDate: TypeFilterSelected) => {
    setFilterDate(selectDate);
  };

  return (
    <div className={styles.container}>
      <button
         data-testid="buttonDay"
        className={`${styles.button} ${
          filterDate === TypeFilterSelected.DAY && styles.buttonSelected
        }`}
        onClick={() => handleClickDate(TypeFilterSelected.DAY)}
      >
        Hoy
      </button>
      <button
        data-testid="buttonWeek"
        onClick={() => handleClickDate(TypeFilterSelected.WEEK)}
        className={`${styles.button} ${
          filterDate === TypeFilterSelected.WEEK && styles.buttonSelected
        }`}
      >
        Esta semana
      </button>
      <button
        data-testid="buttonMonth"
        onClick={() => handleClickDate(TypeFilterSelected.MONTH)}
        className={`${styles.button} ${
          filterDate === TypeFilterSelected.MONTH && styles.buttonSelected
        }`}
      >
        {actualMonth}
      </button>
    </div>
  );
};

export default ButtonDateOption;
