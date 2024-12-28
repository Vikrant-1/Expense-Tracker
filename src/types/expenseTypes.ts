import {CreatedBy, UpdatedBy} from './index';

export enum PaymentModeEnum {
  cash = 'Cash',
  credit_card = 'Credit Card',
  debit_card = 'Debit Card',
  online = 'Online',
  bank_transfer = 'Bank Transfer',
  upi = 'UPI',
}
export interface ExpenseInterface {
  id: string;
  name: string;
  amount: number;
  currencyCode: string;
  description: string;
  categoryId: string;
  expenseDate: number;
  paymentMode: PaymentModeEnum;
  splitId?: string;
  groupId?: string;
  createdBy: CreatedBy;
  updatedBy?: UpdatedBy;
}
