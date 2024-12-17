import {SubjectKey} from '@/types/subject';

export const Endpoints: Readonly<{
  [key in
    | 'BooksQuery'
    | 'BookMetadata'
    | 'BookInsideQuery'
    | 'AuthorQuery'
    | 'AuthorWorksQuery'
    | 'WorksKey'
    | 'WorksKeyRating'
    | 'WorksKeyPopularity'
    | 'SubjectsKey'
    | 'AuthorImage']: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    generate: (...args: any[]) => string;
  };
}> = Object.freeze({
  BooksQuery: {generate: () => 'https://openlibrary.org/search.json'},
  BookMetadata: {
    generate: (ia: string) => `https://archive.org/metadata/${ia}`,
  },
  BookInsideQuery: {generate: (d1: string) => `${d1}/fulltext/inside.php`},
  AuthorQuery: {
    generate: (key: string) => `https://openlibrary.org/authors/${key}.json`,
  },
  AuthorWorksQuery: {
    generate: (key: string) =>
      `https://openlibrary.org/authors/${key}/works.json`,
  },
  WorksKey: {
    generate: (key: string) => `https://openlibrary.org/works/${key}.json`,
  },
  WorksKeyRating: {
    generate: (key: string) =>
      `https://openlibrary.org/works/${key}/ratings.json`,
  },
  WorksKeyPopularity: {
    generate: (key: string) =>
      `https://openlibrary.org/works/${key}/bookshelves.json`,
  },
  SubjectsKey: {
    generate: (key: SubjectKey) =>
      `https://openlibrary.org/subjects/${key}.json`,
  },
  AuthorImage: {
    generate: (key: string) =>
      `https://covers.openlibrary.org/a/olid/${key}.jpg`,
  },
});
