import {BookWorkRich} from '@/types/works';
import {WorksAuthor} from './WorksAuthor';
import {BookImage} from './BookImage';
import {BookStatistics} from './BookStatistics';
import {BookEffect} from './BookEffect';
import {BookSubjects} from './BookSubjects';
import {BookLinks} from './BookLinks';
type Props = BookWorkRich;

export const BookWork = ({
  author_photo,
  title,
  _key,
  cover_edition,
  authors,
  description,
  popularity,
  ratings,
  subject_people,
  subject_places,
  subject_times,
  subjects,
  thumbnail,
  first_publish_date,
  links,
}: Props) => {
  return (
    <div className="w-full h-full font-wotfardRg flex flex-col gap-y-3">
      <div className="flex gap-x-4">
        <BookImage thumbnail={thumbnail} title={title} bookKey={_key} />
        <div className="flex flex-col justify-between w-[80%] gap-y-2">
          <div className="flex flex-col gap-y-4">
            <p className="text-2xl texteffect font-wotfardSb w-[100%]">
              {title}
            </p>
            <div className="flex flex-col gap-y-2">
              <WorksAuthor
                authorKey={authors?.[0]?.author?.key}
                author_photo={author_photo}
              />
              <p className="text-sm text-secondary">{description}</p>
              <BookLinks links={links} />
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <BookStatistics popularity={popularity} ratings={ratings} />
            {first_publish_date && (
              <p className="text-sm text-secondary">
                Published on {first_publish_date}.
              </p>
            )}
          </div>
        </div>
      </div>
      <BookEffect />
      <BookSubjects
        subject_people={subject_people}
        subject_places={subject_places}
        subject_times={subject_times}
        subjects={subjects}
      />
    </div>
  );
};
