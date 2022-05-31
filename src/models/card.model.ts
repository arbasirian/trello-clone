export interface CardModel {
  id: string;
  title: string;
  description: string;
}

export interface CardListItemModel {
  id: string;
  details: CardModel;
}
