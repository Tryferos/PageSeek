import {getAuthorWorksRich} from '@/network/authors';
import {AuthorBook} from './AuthorBook';

type Props = {
  id: string;
  name: string;
};
export const AuthorBookWorks = async ({id, name}: Props) => {
  const works = await getAuthorWorksRich({key: id, limit: 10});
  const bookWorks = works?.entries.filter(
    entry =>
      (entry.book.description && entry.book.description.length > 0) ||
      !!entry.book.first_publish_date ||
      !!entry.book.ratings?.average,
  );
  if (
    (!bookWorks || bookWorks.length < 1) &&
    (!works || works.entries.length < 1)
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
            {((bookWorks?.length === 0 ? works?.entries : bookWorks) ?? [])
              .sort(
                (a, b) =>
                  (b.book.description?.length ?? 0) -
                  (a.book.description?.length ?? 0),
              )
              .map(entry => (
                <AuthorBook {...entry} key={entry.key} />
              ))}
          </ul>
        }
      </div>
    );
  }
};
