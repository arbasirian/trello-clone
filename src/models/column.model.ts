import { CardModel } from "./card.model";

export interface ColumnModel {
  id: string;
  title: string;
  cards: Map<string, CardModel>;
}

export interface ColumnOptionModel {
  key: string;
  value: string;
}
