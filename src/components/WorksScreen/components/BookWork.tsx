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
    <>
      <title>{title}</title>
      <div className="w-full h-[calc(100vh-40px-50px)] pt-2 small:h-[calc(100dvh-40px-40px)] small:pb-12 pb-24 z-[100] font-wotfardRg flex flex-col gap-y-3 small:gap-y-5 pr-1 mobile:pr-0 overflow-y-auto scrollbar absolute left-0 top-10">
        <div className="flex gap-x-4 small:flex-col small:gap-y-4 small:items-center">
          <BookImage thumbnail={thumbnail} title={title} bookKey={_key} />
          <div className="flex flex-col justify-between w-[80%] gap-y-2 small:gap-y-4 small:w-full">
            <div className="flex flex-col gap-y-4 small:items-center small:w-full ">
              <p className="text-2xl texteffect small:text-center font-wotfardSb w-[100%]">
                {title}
              </p>
              <div className="flex flex-col gap-y-2 small:gap-y-4">
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
    </>
  );
};
