/*
 * https://openlibrary.org/search.json?q=${query}
 * https://openlibrary.org/search.json?title=${title}
 * https://openlibrary.org/search.json?author=${author}
 */
export type BookDocument = {
  author_name: Array<string>;
  first_publish_year: number;
  first_sentence?: Array<string>;
  key: string; // * /works/${key}.json
  title: string;
  subject?: Array<string>;
  place?: Array<string>;
  time?: Array<string>;
  person?: Array<string>;
  ratings_average?: number;
  ratings_count?: number;
  ratings_count_1?: number;
  ratings_count_2?: number;
  ratings_count_3?: number;
  ratings_count_4?: number;
  ratings_count_5?: number;
  editions: BookQueryResult;
  //* archive.org item ID
  ia?: Array<string>; //* https://archive.org/metadata/ia[0]
  //* ISBN
  isbn?: Array<string>;
  thumbnail?: string | null;
  author_image?: string | null;
  seed?: Array<string>;
};

export type BookDocumentBlunt = Pick<
  BookDocument,
  | 'key'
  | 'title'
  | 'thumbnail'
  | 'ratings_average'
  | 'first_publish_year'
  | 'ia'
  | 'isbn'
  | 'editions'
  | 'author_name'
  | 'seed'
  | 'author_image'
>;
/*
 * /books/${key}.json
 */
export type BookEdition = {
  key: string; // * /books/${key}.json
  title: string;
  full_title?: string;
  subtitle?: string;
  publishers?: Array<string>;
  publish_places?: Array<string>;
  series?: Array<string>;
  number_of_pages?: number;
  publish_date?: string;
  authors?: KeyReferences; //* /authors/${key}
  works?: KeyReferences; //* /works/${key}
};

export type BookQueryResult = {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Array<BookDocumentBlunt>;
  q: string; //The query string
};

export type KeyReferences = Array<{key: string; name?: string}>;

export type BookQueryParams = {
  [key in 'q' | 'title' | 'author']?: string;
} & BookParams;

type BookParams = {
  limit?: number;
  page?: number;
  fields?: string; // 'editions,ia,isbn'
  sort?: 'new' | 'old' | 'rating desc' | 'title' | 'want_to_read';
};
