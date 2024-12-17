'use server';
import {BookQueryParams, BookQueryResult} from '@/types/search_books';
import Network from '.';
import {Endpoints} from '@/constants/endpoints';
import {fillDocumentsWithMetadata} from './metadata';

const FIELDS_RICH =
  'key,title,author_name,editions,first_sentence,first_publish_year,title_sort,title_suggest,subject,place,time,person,ratings_average,ratings_count,ratings_count_1,ratings_count_2,ratings_count_3,ratings_count_4,ratings_count_5,ia,isbn';

const FIELDS_BLUNT_SEARCH =
  'key,title,thumbnail,ratings_average,first_publish_year,ia,isbn,editions,author_name';

type QueryProps = {
  query: string;
  includeThumbnail?: boolean;
  queryType?: 'q' | 'title' | 'author';
  page?: number;
  limit?: number;
};

export const QueryBooks = async ({
  query,
  includeThumbnail = false,
  queryType = 'q',
  page = 1,
  limit = 10,
}: QueryProps): Promise<BookQueryResult | null> => {
  const res = await Network.get<BookQueryResult, BookQueryParams>({
    url: Endpoints.BooksQuery.generate(),
    params: {
      [queryType]: query,
      limit: limit,
      fields: FIELDS_BLUNT_SEARCH,
      page: page,
      sort: 'want_to_read',
    },
  });
  if (includeThumbnail && res) {
    await fillDocumentsWithMetadata(res.docs);
  }
  return res;
};
