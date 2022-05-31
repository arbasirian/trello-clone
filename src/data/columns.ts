import { ColumnModel } from "models";

export const INITIAL_COLUMNS = new Map<string, ColumnModel>([
  [
    "column_todo",
    {
      id: "column_todo",
      title: "Todo",
      cards: new Map(),
    },
  ],
  [
    "column_doing",
    {
      id: "column_doing",
      title: "Doing",
      cards: new Map(),
    },
  ],
  [
    "column_done",
    {
      id: "column_done",
      title: "Done",
      cards: new Map(),
    },
  ],
]);
