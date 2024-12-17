import {BookDocument, KeyReferences} from './search_books';

/*
 * /works/${key}.json
 */
export type BookWork = {
  key: string; // * /works/${key}.json
  title: string;
  author_photo?: string;
  description: string;
  subjects?: Array<string>;
  subject_places?: Array<string>;
  subject_people?: Array<string>;
  subject_times?: Array<string>;
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
