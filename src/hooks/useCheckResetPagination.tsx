'use client';
import {useSearchType} from '@/slices/search_type_store';
import {useMemo} from 'react';

export const useCheckResetPagination = () => {
  const {
    searchType,
    previouslySearchType,
    sortingType,
    previousSortingType,
    publishedIn,
    previouslyPublishedIn,
  } = useSearchType();

  const hasChangeSortingType = useMemo(() => {
    return (
      sortingType !== previousSortingType ||
      previouslyPublishedIn.start !== publishedIn.start ||
      previouslyPublishedIn.end !== publishedIn.end
    );
  }, [
    sortingType,
    previousSortingType,
    previouslyPublishedIn,
    publishedIn,
    searchType,
    previouslySearchType,
  ]);

  const hasChangedSearchType = useMemo(() => {
    return searchType !== previouslySearchType;
  }, [searchType, previouslySearchType]);

  return {
    hasChangedSearchSortingType: hasChangeSortingType || hasChangedSearchType,
    hasChangeSortingType,
    hasChangedSearchType,
  };
};
