import { useMemo } from "react";

export const useFilter = (array, query) => {
  const searchedArray = useMemo(() => {
    return array.filter(el => {
      const regex = new RegExp(query, 'gi');

      return el.title.match(regex);
    })
  }, [array, query]);

  return searchedArray;
};