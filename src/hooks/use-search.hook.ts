import { useState, useEffect } from 'react';

export function useSearch<T>(
  elements: T[],
  searchValue: string,
  key: string
): T[] {
  const [searchResults, setSearchResults] = useState<T[]>([]);

  useEffect(() => {
    const id = setTimeout(() => {
        const filteredResults = elements.filter((element) =>
        element[key].includes(searchValue.toLowerCase())
        );
        setSearchResults(filteredResults);
    }, 500);
    return () => {
        clearTimeout(id);
    };
  }, [elements, searchValue, key]);

  return searchResults;
}

