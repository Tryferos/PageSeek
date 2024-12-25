import ImageFallback from '@/components/elements/ImageFallback';
import {getAuthor} from '@/network/authors';
import Link from 'next/link';

type Props = {
  authorKey?: string;
  author_photo?: string;
};

export const WorksAuthor = async ({authorKey, author_photo}: Props) => {
  if (!authorKey) {
    return <div>Author Not Found</div>;
  }
  const author = await getAuthor({key: authorKey});
  if (author) {
    return (
      <div className="flex gap-x-2 items-end">
        <figure className="w-[48px] h-[48px] relative">
          <ImageFallback
            src={author_photo ?? '/profile.svg'}
            fallbackSrc="/profile.svg"
            alt={author.name}
            fill
          />
        </figure>
        <p className="text-sm">
          by{' '}
          <Link className="underline font-wotfardMd" href={`${authorKey}`}>
            {author.name}
          </Link>
        </p>
      </div>
    );
  } else {
    return <div>Author Not Found</div>;
  }
};
