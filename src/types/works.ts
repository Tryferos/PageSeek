import {Link} from './author';
import {KeyReferences} from './search_books';

/*
 * /works/${key}.json
 */
export type BookWork = {
  key?: string;
  _key?: string; // * /works/${key}.json
  title: string;
  author_photo?: string;
  thumbnail?: string | null;
  description: string;
  subjects?: Array<string>;
  authors?: Array<{author: KeyReferences[0]}>;
  cover_edition: KeyReferences[0];
  subject_places?: Array<string>;
  subject_people?: Array<string>;
  subject_times?: Array<string>;
  first_publish_date?: string;
  links: Array<Link>;
};

export type BookWorkRatings = {
  summary: {
    average: number;
    count: string;
  };
};

export type BookWorkPopularity = {
  counts: {
    want_to_read: number;
    currently_reading: number;
    already_read: number;
  };
};

export type BookWorkRich = BookWork & {
  ratings?: BookWorkRatings['summary'];
  popularity?: BookWorkPopularity['counts'];
};

export type BookLinks = {
  [key: string]: {
    thumbnail_url: string;
  };
};
