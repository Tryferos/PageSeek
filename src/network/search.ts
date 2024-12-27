'use server';
import {BookQueryParams, BookQueryResult} from '@/types/search_books';
import Network from '.';
import {Endpoints} from '@/constants/endpoints';
import {fillDocumentsWithMetadata} from './metadata';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FIELDS_RICH =
  'key,title,author_name,editions,first_sentence,first_publish_year,title_sort,title_suggest,subject,place,time,person,ratings_average,ratings_count,ratings_count_1,ratings_count_2,ratings_count_3,ratings_count_4,ratings_count_5,ia,isbn';

const FIELDS_BLUNT_SEARCH =
  'key,title,thumbnail,ratings_average,first_publish_year,ia,isbn,editions,author_name,seed';

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
  if (res) {
    return {
      ...res,
      docs: res.docs.map(doc => {
        const authorSeed = doc.seed?.find(seed => seed.includes('authors'));
        return {
          ...doc,
          author_image: authorSeed
            ? Endpoints.AuthorImage.generate(authorSeed.split('/')[2])
            : null,
        };
      }),
    };
  }
  return res;
};
