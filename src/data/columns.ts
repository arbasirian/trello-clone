import { ColumnModel } from "models";

export const INITIAL_COLUMNS: ColumnModel[] = [
  {
    id: "column_todo",
    title: "Todo",
    cards: new Map(),
  },
  {
    id: "column_doing",
    title: "Doing",
    cards: new Map(),
  },
  {
    id: "column_done",
    title: "Done",
    cards: new Map(),
  },
];
