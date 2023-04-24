import {useState, useEffect} from 'react';

export function useSearch<T>(
  elements: T[],
  searchValue: string,
  key: keyof T,
): T[] {
  const [searchResults, setSearchResults] = useState<T[]>([]);

  useEffect(() => {
    const id = setTimeout(() => {
      console.debug({searchValue});
      if (!searchValue) {
        return;
      }
      const filteredResults = elements?.filter(element => {
        return (element[key] as string)
          .toLowerCase()
          .includes(searchValue?.toLowerCase());
      });
      setSearchResults(filteredResults);
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [elements, searchValue, key]);

  return searchResults;
}
