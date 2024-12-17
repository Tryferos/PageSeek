import {BookWorkRich} from './works';

/*
 * /authors/${key}.json
 */
export type Author = {
  key: string; // * /authors/${key}.json
  name: string;
  alternate_names?: Array<string>;
  title?: string;
  bio?: string;
  wikipedia?: string;
  photo?: string;
  links?: Array<Link>;
};

type Link = {
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
