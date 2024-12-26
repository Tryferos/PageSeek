import {getAuthorWorksRich} from '@/network/authors';
import {AuthorBook} from './AuthorBook';

type Props = {
  id: string;
  name: string;
};
export const AuthorBookWorks = async ({id, name}: Props) => {
  const works = await getAuthorWorksRich({key: id, limit: 7});
  if (!works || works.entries.length < 1) {
    return <div>No works found</div>;
  } else {
    return (
      <div className="py-2">
        <p className="font-wotfardMd text-lg">
          {name} is renowned for more than {works.entries.length} works
        </p>
        <ul className="flex px-2 gap-x-4 overflow-x-auto py-2 scrollbar pb-4">
          {works.entries
            .sort(
              (a, b) =>
                (b.book.description?.length ?? 0) -
                (a.book.description?.length ?? 0),
            )
            .map(entry => (
              <AuthorBook {...entry} key={entry.key} />
            ))}
        </ul>
      </div>
    );
  }
};
