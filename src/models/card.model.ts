export interface CardModel {
  id: string;
  title: string;
  description: string;
}

export interface NewCardModel {
  title: string;
  description: string;
  columnId: string;
}

export interface CardListItemModel {
  id: string;
  details: CardModel;
}
