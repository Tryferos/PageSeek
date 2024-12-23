import {BookmarkIcon, BookOpenIcon, StarIcon, ViewingIcon} from '@/icons/Icons';
import {BookWorkRich} from '@/types/works';

type Props = Pick<BookWorkRich, 'popularity' | 'ratings'>;
export const BookStatistics = ({popularity, ratings}: Props) => {
  return (
    <div className="flex flex-col-reverse gap-y-2">
      {ratings && (
        <>
          <div className="flex gap-x-1 items-end">
            <span className="font-wotfardRg">Rated </span>
            <div className="flex items-center gap-x-0">
              <span className="font-wotfardMd">
                {ratings?.average?.toFixed(1) ?? '0'}
              </span>
              <StarIcon />
            </div>
            <span className="font-wotfardRg text-sm">
              by {ratings.count} people.
            </span>
          </div>
        </>
      )}
      {popularity && (
        <div className="flex gap-x-4">
          <div className="flex gap-x-1 items-center">
            <span className="font-wotfardMd">
              {popularity?.currently_reading}
            </span>
            <ViewingIcon />
          </div>
          <div className="flex gap-x-1 items-center">
            <span className="font-wotfardMd">{popularity?.already_read}</span>
            <BookOpenIcon />
          </div>
          <div className="flex gap-x-1 items-center">
            <span className="font-wotfardMd">{popularity?.want_to_read}</span>
            <BookmarkIcon />
          </div>
        </div>
      )}
    </div>
  );
};
