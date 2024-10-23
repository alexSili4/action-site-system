export type DateTo = 'disabled' | '';

export interface IWinner {
  client_name: string;
  client_phone: number;
  code: string;
  gift_name: string;
}

export type Winners = IWinner[];

export interface IWinnerByDate {
  date_from: string;
  date_to: DateTo;
  winners: Winners;
}

export type WinnersByDates = IWinnerByDate[];
