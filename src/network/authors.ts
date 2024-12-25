import {
  Author,
  AuthorWorks,
  AuthorWorksRich,
  AuthorWorksRichEntry,
} from '@/types/author';
import Network from '.';
import {Endpoints} from '@/constants/endpoints';
import {getBookWorkRich} from './works';

type AuthorPros = {
  key: string;
};

type AuthorWorkPros = AuthorPros & {
  limit?: number;
  offset?: number;
};

export const getAuthor = async ({
  key: _key,
}: AuthorPros): Promise<Author | null> => {
  const key = _key.replace('/authors/', '');
  const res = await Network.get<Author>({
    url: Endpoints.AuthorQuery.generate(key),
  });
  if (res) {
    return {
      ...res,
      _key: res.key,
      key: undefined,
      photo: Endpoints.AuthorImage.generate(key),
    };
  }
  return res;
};

export const getAuthorWorksRich = async (
  props: AuthorWorkPros,
): Promise<AuthorWorksRich | null> => {
  const res = await getAuthorWorks({
    ...props,
    key: props.key.replace('/authors/', ''),
  });
  if (res) {
    const authorWorksRich: AuthorWorksRichEntry[] = [];
    for (const entry of res.entries) {
      const book = await getBookWorkRich({
        key: entry.key.replace('/works/', ''),
      });
      if (book) {
        authorWorksRich.push({book, ...entry});
      }
    }
    return {
      ...res,
      size: res.size,
      entries: authorWorksRich,
    };
  }
  return null;
};

const getAuthorWorks = async ({
  key,
  limit = 5,
  offset = 0,
}: AuthorWorkPros): Promise<AuthorWorks | null> => {
  const res = await Network.get<AuthorWorks>({
    url: Endpoints.AuthorWorksQuery.generate(key),
    params: {
      limit,
      offset,
    },
  });
  return res;
};
