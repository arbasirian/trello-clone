import { ColumnModel } from "models";

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
