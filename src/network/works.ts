import Network from '.';
import {Endpoints} from '@/constants/endpoints';
import {
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
    return {
      ...res,
      author_photo: Endpoints.AuthorImage.generate(
        (res as any).authors[0]?.author?.key ?? '',
      ),
    };
  } else {
    return res;
  }
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
