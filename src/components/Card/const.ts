import { format } from "date-fns";
import { TypeFilterSelected } from "../../const";
import { es } from "date-fns/locale";

const titleHeader = (selectDate: TypeFilterSelected) => {
  const actualMonth = format(new Date(), "MMMM", { locale: es });
  switch (selectDate) {
    case TypeFilterSelected.DAY:
      return "Hoy";
    case TypeFilterSelected.WEEK:
      return "Esta semana";
    case TypeFilterSelected.MONTH:
      return actualMonth;
    default:
      return actualMonth;
  }
};

export { titleHeader };
