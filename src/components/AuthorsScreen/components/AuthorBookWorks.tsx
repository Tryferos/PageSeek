import {getAuthorWorksRich} from '@/network/authors';
import {AuthorBook} from './AuthorBook';

type Props = {
  id: string;
  name: string;
};
export const AuthorBookWorks = async ({id, name}: Props) => {
  const works = await getAuthorWorksRich({key: id, limit: 5});
  // const bookWorks = works?.entries.filter(
  //   entry =>
  //     (entry.book.description && entry.book.description.length > 0) ||
  //     !!entry.book.first_publish_date ||
  //     !!entry.book.ratings?.average,
  // );
  if (
    // (!bookWorks || bookWorks.length < 1) &&
    !works ||
    works.entries.length < 1
  ) {
    return null;
  } else {
    return (
      <div className="py-2">
        <p className="font-wotfardMd text-lg">
          {name} is renowned for more than {works?.entries.length} works
        </p>
        {
          <ul className="flex px-2 gap-x-4 overflow-x-auto py-2 scrollbar pb-4">
            {works.entries
              .sort((a, b) => {
                if (a.book.description || b.book.description) {
                  return (
                    (b.book.description?.length ?? 0) -
                    (a.book.description?.length ?? 0)
                  );
                } else if (
                  a.book.first_publish_date ||
                  b.book.first_publish_date
                ) {
                  const publishDateA = a.book.first_publish_date;
                  const publishDateB = b.book.first_publish_date;
                  return (
                    parseInt(publishDateB ?? '0') -
                    parseInt(publishDateA ?? '0')
                  );
                } else if (a.book.ratings?.average || b.book.ratings?.average) {
                  return (
                    (b.book.ratings?.average ?? 0) -
                    (a.book.ratings?.average ?? 0)
                  );
                } else {
                  return a.book.title.localeCompare(b.book.title);
                }
              })
              .map((entry, i) => (
                <AuthorBook {...entry} key={i} />
              ))}
          </ul>
        }
      </div>
    );
  }
};
