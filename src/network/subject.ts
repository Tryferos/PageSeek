import {Endpoints} from '@/constants/endpoints';
import {SubjectKey, WorksBySubject} from '@/types/subject';
import {fillDocumentsWithMetadata} from './metadata';
import Network from './index';
import {PublishedIn} from '@/slices/search_type_store';

type Props = {
  key: SubjectKey;
  limit?: number;
  offset?: number;
  published_in?: PublishedIn;
};
export const getWorksBySubject = async ({
  key,
  limit = 5,
  offset = 0,
  published_in = {
    start: 1900,
    end: new Date().getFullYear(),
  },
}: Props): Promise<WorksBySubject | null> => {
  const res = await Network.get<WorksBySubject>({
    url: Endpoints.SubjectsKey.generate(key.toLowerCase().replaceAll(' ', '_')),
    params: {
      limit,
      offset,
      ebooks: true,
      published_in: `${published_in.start}-${published_in.end}`,
    },
  });
  if (res) {
    await fillDocumentsWithMetadata(
      res.works.map(w => ({...w, ia: [`${w.ia}`]})),
    );
  }
  return res;
};
