export interface IWinner {
  client_name: string;
  client_phone: number;
  code: string;
  gift_name: string;
}

export type Winners = IWinner[];

export interface IWinnerByDate {
  date: string;
  winners: Winners;
}

export type WinnersByDates = IWinnerByDate[];
