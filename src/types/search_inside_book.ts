/*
    * https://archive.org/metadata/{ia}
*/

export type BooMetadata = {
    created: number;
    d1: string; //* URL Domain
    d2: string; //* URL Domain
    dir: string; //* Path
    files: Array<BookMetadataFile>;
}

type BookMetadataFile = {
    name: string;
}

/*
    * {d1}/fulltext/inside.php?item_id={ia}&doc={ia}&path={dir}&q={query}
*/

export type BookInsideResult = {
    ia: string;
    q: string;
    indexed: boolean;
    matches: Array<BookInsideMatch>;
}

type BookInsideMatch = {
    /*
    * Selected text is wrapped inside <IA_FTS_MATCH>{TEXT QUERY FOUND}</IA_FTS_MATCH>
    */
    text: string;
    par: Position & {
        boxes: Array<Position>;
        page_width: number;
        page_height: number;
    }
}

type Position = {
    page: string;
    l: number;
    r: number;
    t: number;
    b: number;
}
