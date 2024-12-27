import Network from '.';
import {Endpoints} from '@/constants/endpoints';
import {
  BookLinks,
  BookWork,
  BookWorkPopularity,
  BookWorkRatings,
  BookWorkRich,
} from '@/types/works';

type WorksProps = {
  key: string;
};
export const getBookWork = async ({
  key,
}: WorksProps): Promise<BookWork | null> => {
  const res = await Network.get<BookWork>({
    url: Endpoints.WorksKey.generate(key),
  });
  if (res) {
    let thumbnail: string | null = null;
    if (res.cover_edition) {
      thumbnail = await getBookThumbnail(res?.cover_edition);
    }
    let description =
      typeof res.description === 'object'
        ? (res.description as {value: string}).value
        : res.description;
    const redundantDescription = description?.indexOf('---');
    if (redundantDescription > -1) {
      description = description?.slice(0, redundantDescription);
    }
    return {
      ...res,
      key: undefined,
      description: description,
      _key: res.key,
      thumbnail: thumbnail,
      author_photo: Endpoints.AuthorImage.generate(
        (res as any).authors[0]?.author?.key.replace('/authors/', '') ?? '',
      ),
    };
  } else {
    return res;
  }
};

const getBookThumbnail = async ({
  key,
}: Partial<WorksProps>): Promise<string | null> => {
  if (!key) {
    return null;
  }
  const res = await Network.get<BookLinks>({
    url: Endpoints.BookLinks.generate(key.replace('/books/', '')),
  });
  if (res) {
    return Object.values(res)?.[0]?.thumbnail_url?.replace('-S', '-L');
  }
  return res;
};

export const getBookWorkRich = async ({
  key,
}: WorksProps): Promise<BookWorkRich | null> => {
  const res = await getBookWork({key});
  const ratings = await getBookRating({key});
  const popularity = await getBookPopularity({key});

  if (res) {
    return {
      ...res,
      ratings: ratings?.summary,
      popularity: popularity?.counts,
    };
  } else {
    return null;
  }
};

const getBookRating = async ({
  key,
}: WorksProps): Promise<BookWorkRatings | null> => {
  const res = Network.get<BookWorkRatings>({
    url: Endpoints.WorksKeyRating.generate(key),
  });
  return res;
};

const getBookPopularity = async ({
  key,
}: WorksProps): Promise<BookWorkPopularity | null> => {
  const res = Network.get<BookWorkPopularity>({
    url: Endpoints.WorksKeyPopularity.generate(key),
  });
  return res;
};
