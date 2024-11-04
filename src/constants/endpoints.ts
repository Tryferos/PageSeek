

export const Endpoints: Readonly<{[key in 'BooksQuery' | 'BookMetadata' | 'BookInsideQuery']: {generate: (...args: any[]) => string}}> = Object.freeze({
    BooksQuery: {generate: () => 'https://openlibrary.org/search.json'},
    BookMetadata: {generate: (ia: string) => `https://archive.org/metadata/${ia}`},
    BookInsideQuery: {generate: (d1: string) => `${d1}/fulltext/inside.php`},
})