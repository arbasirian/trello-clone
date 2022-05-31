import { CardListItemModel, CardModel } from "models";

export const addNewCardAction = () => {};

/**
 * Factory function that convert Object Map of card to array of cards
 * @param { Map<string, CardModel>} cards - cards of each column
 * @returns {CardListItemModel[]}
 */
export const convertCardsMapToArray = (
  cards: Map<string, CardModel>
): CardListItemModel[] =>
  [...cards].map((card) => {
    const [id, details] = card;
    return { id, details };
  });
