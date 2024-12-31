import ImageFallback from '@/components/elements/ImageFallback';
import {BookLinks} from '@/components/WorksScreen/components/BookLinks';
import {Author, Link} from '@/types/author';
import {Suspense, useMemo} from 'react';
import {AuthorBookWorks} from './AuthorBookWorks';
import {BookEffect} from '@/components/WorksScreen/components/BookEffect';
import {AuthorBooksSkeleton} from './AuthorBooksSkeleton';

type Props = Author;
export const AuthorInfo = ({
  name,
  photo,
  alternate_names,
  birth_date,
  death_date,
  fuller_name,
  wikipedia,
  bio,
  _key,
  links: _links,
}: Props) => {
  const links = useMemo(() => {
    const tempLinks: Link[] = [];
    if (wikipedia) {
      tempLinks.push({title: 'Wikipedia', url: wikipedia});
    }
    if (_links && _links.length > 0) {
      tempLinks.push(..._links.filter(link => wikipedia !== link.url));
    }
    return tempLinks;
  }, [_links, wikipedia]);

  return (
    <>
      <title>{fuller_name ?? name}</title>
      <div className="w-full h-[calc(100vh-40px-50px)] pt-2 small:h-[calc(100dvh-40px-40px)] small:pb-12 pb-24 z-[100] font-wotfardRg flex flex-col gap-y-3 small:gap-y-5 pr-1 mobile:pr-0 overflow-y-auto scrollbar absolute left-0 top-10">
        <div className="flex gap-x-3 small:flex-col small:gap-y-4 small:items-center w-full large:h-full">
          <figure className="relative w-[35%] min-w-[300px] h-[35vw] min-h-[350px]">
            <ImageFallback
              quality={100}
              fallbackSrc="/book.png"
              src={photo ?? '/book.png'}
              alt={name}
              priority
              fill
            />
          </figure>
          <div className="flex flex-col justify-between w-[65%] tablet:w-[60%] small:min-h-[10vh] small:w-full small:px-4 mobile:px-0 small:gap-y-2">
            <div className="flex flex-col gap-y-1 bg small:gap-y-2 b-b">
              <p className="text-3xl font-wotfardSb w-[100%] texteffect small:text-center">
                {`${fuller_name ?? name}`}
                <span className="text-lg ">
                  {fuller_name ? ` (${name})` : ''}
                </span>
              </p>
              <div className="flex flex-col gap-y-3">
                {bio && <p className="text-sm text-secondary">{bio}</p>}
                {links.length > 0 && <BookLinks links={links} />}
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              {alternate_names && alternate_names.length > 0 && (
                <div className="flex flex-col gap-y-0">
                  <p className="font-wotfardMd text-sm underline underline-offset-2 text-secondary">
                    Also known as
                  </p>
                  <p className="text-sm font-wotfardRg text-secondary truncate w-[95%]">
                    {alternate_names.join(', ')}.
                  </p>
                </div>
              )}
              {(birth_date || death_date) && (
                <div className=" flex flex-col gap-y-0">
                  {birth_date && (
                    <p className="text-sm text-secondary">
                      Born in{' '}
                      <span className="font-wotfardMd">{birth_date}</span>.
                    </p>
                  )}
                  {death_date && (
                    <p className="text-sm text-secondary">
                      Deceased in{' '}
                      <span className="font-wotfardMd">{death_date}</span>.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <BookEffect />
        {_key && (
          <Suspense fallback={<AuthorBooksSkeleton />}>
            <AuthorBookWorks id={_key} name={name} />
          </Suspense>
        )}
      </div>
    </>
  );
};
