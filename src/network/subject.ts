import {Endpoints} from '@/constants/endpoints';
import {SubjectKey, WorksBySubject} from '@/types/subject';
import {fillDocumentsWithMetadata} from './metadata';
import Network from './index';

type Props = {
  key: SubjectKey;
  limit?: number;
  offset?: number;
  published_in?: [string, string];
};
export const getWorksBySubject = async ({
  key,
  limit = 5,
  offset = 0,
  published_in = ['2000', '2024'],
}: Props): Promise<WorksBySubject | null> => {
  const res = await Network.get<WorksBySubject>({
    url: Endpoints.SubjectsKey.generate(key.toLowerCase().replaceAll(' ', '_')),
    params: {
      limit,
      offset,
      ebooks: true,
      published_in: published_in.join('-'),
    },
  });
  if (res) {
    await fillDocumentsWithMetadata(
      res.works.map(w => ({...w, ia: [`${w.ia}`]})),
    );
  }
  return res;
};
