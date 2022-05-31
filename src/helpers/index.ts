import { ColumnModel } from "models";
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

export const addNewColumn = () => {};

/**
 * Factory function that convert Object Map of columns to array of columns
 * @param { Map<string, ColumnModel>} columns - columns
 * @returns {ColumnModel[]}
 */
export const convertColumnMapToArray = (
  columns: Map<string, ColumnModel> | undefined
): ColumnModel[] => {
  if (!columns) return [];
  return [...columns].map((column) => {
    const [_, details] = column;
    return details;
  });
};

/**
 * Factory function that generate id base on target place
 * @param {"card" | "column"} type - target id
 * @param {string} text
 * @returns {string}
 */
export const generateId = (type: "card" | "column", text: string): string =>
  [type, text, Math.random()].join("_");
