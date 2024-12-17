import {BookMetadata} from '@/types/search_inside_book';
import Network from '.';
import {Endpoints} from '@/constants/endpoints';
import {BookDocument, BookDocumentBlunt} from '@/types/search_books';

export const BookMetadataImage = async (ia: string) => {
  const res = await Network.get<BookMetadata>({
    url: Endpoints.BookMetadata.generate(ia),
  });
  if (res) {
    const {d1, dir, files} = res;
    const imageUrl = `${d1}${dir}/${files[0].name}`;
    return imageUrl;
  }
  return null;
};

export const fillDocumentsWithMetadata = async (
  docs: Pick<BookDocument, 'ia' | 'thumbnail'>[],
) => {
  for (const doc of docs) {
    if (doc.ia && doc.ia.length > 0) {
      const res = await BookMetadataImage(doc.ia[0]);
      doc.thumbnail = res?.includes('https') ? res : `https://${res}`;
    }
  }
};
