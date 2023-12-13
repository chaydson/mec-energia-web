export interface InvoicesYear {
  year: number;
  invoices: Array<Invoice>;
}

export interface Invoice {
  id?: number;
  month: number;
  isAtypical?: boolean;
  consumption_peak?: number;
  consumption_off_peak?: number;
  demand_peak?: number;
  demand_off_peak?: number;
  value?: number;
  isPending: boolean;
  currentMonthPending?: boolean;
}
