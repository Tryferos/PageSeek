import {Subjects} from '@/constants/search';
import {BookDocument, KeyReferences} from './search_books';

type SubjectBookDocument = Pick<
  BookDocument,
  'subject' | 'title' | 'key' | 'first_publish_year' | 'thumbnail' | 'ia'
> & {
  authors?: KeyReferences;
};

export type SubjectKey = keyof typeof Subjects;

/*
 * /subjects/${key}.json
 */
export type WorksBySubject = {
  key: SubjectKey; //* /subjects/${key}.json
  name: string; //* Subject name
  work_count: number;
  works: Array<SubjectBookDocument>;
};
