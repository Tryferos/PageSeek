import {QueryBooks} from '@/network/search';
import {useLoading} from '@/slices/loading';
import {usePagination} from '@/slices/pagination';
import {useSearch} from '@/slices/search';
import {useSearchResult} from '@/slices/search_result';

const PAGE_SIZE = 9;

export const useSearchHandler = () => {
  const {loading, setLoading} = useLoading();
  const {currentPage, setCurrentPage, setTotalPages} = usePagination();
  const {isQueryValid, query} = useSearch();
  const {setResult, lastPageFetched} = useSearchResult();

  const searchBooks = async () => {
    if (isQueryValid && query && !loading) {
      setLoading(true);
      const res = await QueryBooks({
        query: query,
        includeThumbnail: true,
        queryType: 'q',
        limit: PAGE_SIZE,
        page: 1,
      });
      setCurrentPage(1);
      setTotalPages((res?.numFound ?? PAGE_SIZE) / PAGE_SIZE);
      setResult(res, 1);
      setLoading(false);
    }
  };

  const paginateBooks = async () => {
    if (query && currentPage > lastPageFetched) {
      setLoading(true);
      const res = await QueryBooks({
        query: query,
        includeThumbnail: true,
        queryType: 'q',
        limit: PAGE_SIZE,
        page: currentPage,
      });
      setTotalPages((res?.numFound ?? PAGE_SIZE) / PAGE_SIZE);
      setResult(res, currentPage);
      setLoading(false);
    }
  };

  return {searchBooks, paginateBooks};
};
