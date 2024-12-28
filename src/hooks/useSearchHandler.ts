import {QueryBooks} from '@/network/search';
import {getWorksBySubject} from '@/network/subject';
import {useLoading} from '@/slices/loading';
import {usePagination} from '@/slices/pagination';
import {useSearch} from '@/slices/search';
import {useSearchResult} from '@/slices/search_result';
import {useSearchType} from '@/slices/search_type';
import {BookDocumentBlunt} from '@/types/search_books';
import {SubjectKey} from '@/types/subject';

const PAGE_SIZE = 9;

export const useSearchHandler = () => {
  const {loading, setLoading} = useLoading();
  const {currentPage, setCurrentPage, setTotalPages} = usePagination();
  const {isQueryValid, query} = useSearch();
  const {setResult, lastPageFetched} = useSearchResult();

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
        setCurrentPage(1);
        setTotalPages((res?.numFound ?? PAGE_SIZE) / PAGE_SIZE);
        setResult(res, 1);
        setLoading(false);
      }
    }
  };

  const paginateBooks = async () => {
    if (query && currentPage > lastPageFetched) {
      setLoading(true);
      const searchType = useSearchType.getState().searchType;
      if (searchType !== 'subject') {
        const res = await QueryBooks({
          query: query,
          includeThumbnail: true,
          queryType: searchType,
          limit: PAGE_SIZE,
          page: currentPage,
        });
        setTotalPages((res?.numFound ?? PAGE_SIZE) / PAGE_SIZE);
        setResult(res, currentPage);
      } else {
        const res = await getWorksBySubject({
          key: query as SubjectKey,
          limit: PAGE_SIZE,
          offset: (currentPage - 1) * PAGE_SIZE,
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
            start: 0,
          },
          currentPage,
        );
      }
      setLoading(false);
    }
  };

  return {searchBooks, paginateBooks};
};
