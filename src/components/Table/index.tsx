import React, { useEffect, useState } from "react";
import styles from "./table.module.scss";
import {
  formatValueAmount,
  PaymentMethod,
  StatusTransaction,
  textDate,
} from "./const";
import { format } from "date-fns/format";
import { es } from "date-fns/locale";
import { IoMdSearch } from "react-icons/io";
import { TableProps } from "./types";

const Table: React.FC<TableProps> = ({ data, filterDate }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const month = format(new Date(), "MMMM", { locale: es });

  // const handleViewDetail = (dataSelected: DataResult) => {
  //   //TODO function to select details
  // };

  const handleSearch = (valueSearch: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(valueSearch.target.value);
  };

  useEffect(() => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const filtered = data.filter((item) => {
      const matchesSearchTerm = Object.values(item).some((val) =>
        String(val).toLowerCase().includes(lowerCaseTerm)
      );
      return matchesSearchTerm;
    });
    setFilteredData(filtered);
  }, [searchTerm, data, filterDate]);

  return (
    <>
      <div className={styles.headerCardSearch}>
        <p>Tus ventas de {month}</p>
      </div>
      <div className={styles.containerInput}>
        <span className={styles.iconSearch}>
          <IoMdSearch />
        </span>
        <input
          className={styles.inputSearch}
          onChange={handleSearch}
          placeholder="Buscar"
          type="text"
        />
      </div>

      <table className={styles.containerTable}>
        <thead>
          <tr className={styles.headerTable}>
            <th>Transacción</th>
            <th>Fecha y hora</th>
            <th>Método de pago</th>
            <th>ID transacción Bold</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr
                data-target="#exampleModalRight"
                //onClick={() => handleViewDetail(item)}
                className={styles.rowTable}
                key={item.id}
              >
                <td
                  data-label="Transacción"
                  className={
                    item.status === StatusTransaction.SUCCESS
                      ? styles.successLine
                      : styles.errorLine
                  }
                >
                  {item.status === StatusTransaction.SUCCESS
                    ? "Cobro exitoso"
                    : "Cobro no realizado"}
                </td>
                <td data-label="Fecha y hora" className={styles.textBlack}>
                  {textDate(item.createdAt)}
                </td>
                <td data-label="Método de pago" className={styles.textBlack}>
                  <>
                    <img
                      className={styles.logoImage}
                      src={`src/assets/images/${
                        item.paymentMethod === "CARD"
                          ? item.franchise
                          : item.paymentMethod
                      }.png`}
                      alt=""
                    />

                    {item.paymentMethod !== PaymentMethod.PSE
                      ? `****${item.transactionReference}`
                      : "PSE"}
                  </>
                </td>
                <td
                  data-label="ID transacción Bold"
                  className={styles.textBlack}
                >
                  {item.id}
                </td>
                <td data-label="Monto" className={styles.textBlue}>
                  {formatValueAmount(item.amount)}
                  {item.deduction && (
                    <>
                      <p className={styles.deductionText}>Deducción Bold</p>
                      <p className={styles.deductionValue}>
                        - {formatValueAmount(item.amount, item.deduction)}
                      </p>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr className={styles.noData}>
              <td colSpan={5} className={styles.noData}>
                No hay datos disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
