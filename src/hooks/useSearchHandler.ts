'use client';
import {QueryBooks} from '@/network/search';
import {getWorksBySubject} from '@/network/subject';
import {useLoading} from '@/slices/loading_store';
import {usePagination} from '@/slices/pagination_store';
import {useSearch} from '@/slices/search_store';
import {useSearchResult} from '@/slices/search_result_store';
import {useSearchType} from '@/slices/search_type_store';
import {BookDocumentBlunt} from '@/types/search_books';
import {SubjectKey} from '@/types/subject';
import {useMemo} from 'react';

const PAGE_SIZE = 9;

export const useSearchHandler = () => {
  const {loading, setLoading} = useLoading();
  const {currentPage, setCurrentPage, setTotalPages} = usePagination();
  const {isQueryValid, query} = useSearch();
  const {setResult, lastPageFetched} = useSearchResult();
  const {
    searchType,
    sortingType,
    previousSortingType,
    setPreviousSortingType,
    publishedIn,
    previouslyPublishedIn,
    setPreviouslyPublishedIn,
  } = useSearchType();

  const hasChangedSortingType = useMemo(() => {
    return (
      sortingType !== previousSortingType ||
      previouslyPublishedIn.start !== publishedIn.start ||
      previouslyPublishedIn.end !== publishedIn.end
    );
  }, [sortingType, previousSortingType, previouslyPublishedIn, publishedIn]);

  const searchBooks = async () => {
    if (isQueryValid && query && !loading) {
      setLoading(true);
      const {searchType, sortingType} = useSearchType.getState();
      if (searchType !== 'subject') {
        const res = await QueryBooks({
          query: query,
          includeThumbnail: true,
          queryType: searchType,
          limit: PAGE_SIZE,
          page: 1,
          sort: sortingType,
        });
        //* Reset Pagination
        setCurrentPage(1);
        setTotalPages((res?.numFound ?? PAGE_SIZE) / PAGE_SIZE);
        //* Set Result
        setResult(res, 1);
      } else {
        const res = await getWorksBySubject({
          key: query as SubjectKey,
          limit: PAGE_SIZE,
          offset: 0,
          published_in: [`${publishedIn.start}`, `${publishedIn.end}`],
        });
        setCurrentPage(1);
        setTotalPages((res?.work_count ?? PAGE_SIZE) / PAGE_SIZE);
        //* Set Result
        setResult(
          {
            q: query,
            docs:
              res?.works.map(
                item =>
                  ({
                    author_name: [item.authors?.[0].name],
                    first_publish_year: item.first_publish_year,
                    editions: undefined,
                    key: item.key,
                    thumbnail: item.thumbnail,
                    title: item.title,
                  }) as BookDocumentBlunt,
              ) ?? [],
            numFound: res?.work_count ?? 0,
            numFoundExact: true,
            start: 0,
          },
          1,
        );
      }
      setPreviousSortingType(sortingType);
      setLoading(false);
    }
  };

  const paginateBooks = async () => {
    if (query && (currentPage > lastPageFetched || hasChangedSortingType)) {
      setLoading(true);
      let _currentPage = currentPage;
      if (searchType !== 'subject') {
        if (sortingType !== previousSortingType) {
          /*
           * Sorting Type Changed
           * Reset Pagination and Result
           */
          _currentPage = 1;
          setCurrentPage(1);
          setTotalPages(1);
          setResult(null, 1);
        }

        setPreviousSortingType(sortingType);
        const res = await QueryBooks({
          query: query,
          includeThumbnail: true,
          queryType: searchType,
          limit: PAGE_SIZE,
          page: _currentPage,
          sort: sortingType,
        });
        setTotalPages((res?.numFound ?? PAGE_SIZE) / PAGE_SIZE);
        setResult(res, _currentPage);
      } else {
        let _currentPage = currentPage;
        if (
          previouslyPublishedIn.start !== publishedIn.start ||
          previouslyPublishedIn.end !== publishedIn.end
        ) {
          /*
           * Sorting Dates Changed
           * Reset Pagination and Result
           */
          _currentPage = 1;
          setCurrentPage(1);
          setTotalPages(1);
          setResult(null, 1);
        }

        setPreviouslyPublishedIn(publishedIn);
        const res = await getWorksBySubject({
          key: query as SubjectKey,
          limit: PAGE_SIZE,
          offset: (_currentPage - 1) * PAGE_SIZE,
          published_in: [`${publishedIn.start}`, `${publishedIn.end}`],
        });
        setTotalPages((res?.work_count ?? PAGE_SIZE) / PAGE_SIZE);
        setResult(
          {
            q: query,
            docs:
              res?.works.map(
                item =>
                  ({
                    author_name: [item.authors?.[0].name],
                    first_publish_year: item.first_publish_year,
                    editions: undefined,
                    key: item.key,
                    thumbnail: item.thumbnail,
                    title: item.title,
                  }) as BookDocumentBlunt,
              ) ?? [],
            numFound: res?.work_count ?? 0,
            numFoundExact: true,
            start: (_currentPage - 1) * PAGE_SIZE,
          },
          _currentPage,
        );
      }
      setLoading(false);
    }
  };

  return {searchBooks, paginateBooks};
};
