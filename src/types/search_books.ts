/*
    * https://openlibrary.org/search.json?q=${query}
    * https://openlibrary.org/search.json?title=${title}
    * https://openlibrary.org/search.json?author=${author}
*/
export type BookDocument = {
    author_name: string
    first_publish_year: number
    first_sentence: Array<string>
    key: string; // /work/${key}
    title: string;
    title_sort: string;
    title_suggest: string;
    subject: Array<string>;
    place: Array<string>;
    time: Array<string>;
    person: Array<string>;
    ratings_average: number;
    ratings_count: number;
    ratings_count_1: number;
    ratings_count_2: number;
    ratings_count_3: number;
    ratings_count_4: number;
    ratings_count_5: number;
    editions: Array<BookQueryResult>;
    //* archive.org item ID
    ia: Array<string>; //* https://archive.org/metadata/ia[0] 
    //* ISBN
    isbn: Array<string>;
}

export type BookQueryResult = {
    data: Array<BookDocument>
    numFound: number
    start: number;
    numFoundExact: boolean;
    docs: Array<BookDocument>
    q: string; //The query string
}
