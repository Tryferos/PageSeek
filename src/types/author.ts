import {BookWorkRich} from './works';

/*
 * /authors/${key}.json
 */
export type Author = {
  key?: string; // * /authors/${key}.json
  _key?: string; // * /authors/${key}.json
  name: string;
  fuller_name?: string;
  death_date?: string;
  birth_date?: string;
  alternate_names?: Array<string>;
  title?: string;
  bio?: string;
  wikipedia?: string;
  photo?: string;
  links?: Array<Link>;
};

export type Link = {
  title: string;
  url: string;
};

/*
 * /authors/${key}/works.json
 * Author Works
 */
export type AuthorWorks = {
  size: number;
  entries: Array<AuthorWorksBluntEntry>;
};

type AuthorWorksBluntEntry = {
  key: string; // * /works/${key}.json
  title: string;
};

/*
 * Author Works Rich
 */
export type AuthorWorksRich = Omit<AuthorWorks, 'entries'> & {
  entries: Array<AuthorWorksRichEntry>;
};

export type AuthorWorksRichEntry = AuthorWorksBluntEntry & {
  book: BookWorkRich;
};
