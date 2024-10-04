import { format } from "date-fns";

enum StatusTransaction {
  SUCCESS = "SUCCESSFUL",
  REJECT = "REJECTED",
}

enum PaymentMethod {
  VISA = "VISA ",
  MASTERCARD = "MASTERCARD",
  AMERICAN = "AMERICAN",
  NEQUI = "NEQUI",
  BANCOLOMBIA = "BANCOLOMBIA",
  DAVIPLATA = "DAVIPLATA",
  PSE = "PSE",
}

const formartValues = (amount: number) => {
  const formattedValue = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
  return formattedValue;
};

const formatValueAmount = (amount: number, deduction?: number) => {
  if (deduction) {
    const valueDeduction = amount - deduction;
    const formattedValue = formartValues(valueDeduction);
    return formattedValue;
  }
  return formartValues(amount);
};

const textDate = (dateCreated: number) => {
  const formattedDate = format(new Date(dateCreated), "dd/MM/yyyy - HH:mm:ss");
  return formattedDate;
};

const getLocalStorage = (key: string, defaultValue: string) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

export {
  StatusTransaction,
  PaymentMethod,
  formatValueAmount,
  textDate,
  getLocalStorage,
};
