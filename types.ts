
export enum AccountType {
  SAVINGS = 'Savings',
  CURRENT = 'Current',
  LOAN = 'Loan',
}

export enum TransactionType {
  DEPOSIT = 'Deposit',
  WITHDRAWAL = 'Withdrawal',
  TRANSFER = 'Transfer',
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  profileImageUrl: string;
}

export interface Account {
  id: string;
  customerId: string;
  type: AccountType;
  accountNumber: string;
  balance: number;
  currency: string;
}

export interface Transaction {
  id: string;
  accountId: string;
  type: TransactionType;
  amount: number;
  description: string;
  timestamp: string;
}

// FIX: Add an index signature to make the type compatible with the recharts library.
// The Pie component expects a data array of objects that can be indexed by a string.
export interface SpendingCategory {
    name: string;
    value: number;
    [key: string]: string | number;
}

export interface MonthlyData {
    month: string;
    income: number;
    expenses: number;
}