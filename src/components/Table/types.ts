import { TypeFilterSelected } from "../../const";

export type DataResult = {
  id: string;
  status: string;
  paymentMethod: string;
  salesType: string;
  createdAt: number;
  transactionReference: number;
  amount: number;
  deduction?: number;
  franchise?: string;
};

export type TableProps = {
  data: DataResult[];
  filterDate: TypeFilterSelected;
};
