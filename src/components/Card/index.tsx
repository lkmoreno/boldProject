import React from "react";
import styles from "./card.module.scss";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Tooltip } from "react-tooltip";
import { titleHeader } from "./const";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ filterDate }) => {
  const formatDate = format(new Date(), "d 'de' MMMM 'de' yyyy", {
    locale: es,
  });

  return (
    <div data-testid="cardResume" className={styles.card}>
      <div className={styles.header}>
        <span className={styles.title}>{`Total de ventas de ${titleHeader(
          filterDate
        )}`}</span>
        <div data-tooltip-id="cardInfo">
          <HiOutlineInformationCircle />
        </div>
        <Tooltip
          id="cardInfo"
          content={`Podras ver el total ventas de ${titleHeader(filterDate)}`}
          place="top"
        />
      </div>
      <div className={styles.content}>
        <p className={styles.textValue}>$9.000.000</p>
        <p className={styles.textDate}>{formatDate}</p>
      </div>
    </div>
  );
};

export default Card;
