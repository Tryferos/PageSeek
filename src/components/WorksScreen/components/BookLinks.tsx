import {PaperClipIcon} from '@/icons/Icons';
import {BookWork} from '@/types/works';
import Link from 'next/link';

type Props = Pick<BookWork, 'links'>;

export const BookLinks = ({links}: Props) => {
  if (!links || links.length === 0) {
    return null;
  }
  return (
    <div className="flex flex-col gap-y-1">
      <p className="text-sm font-wotfardMd text-secondary underline underline-offset-2">
        Read online
      </p>
      <ul className="flex scrollbar flex-col gap-y-2 max-h-[11vw] min-h-[90px] overflow-y-auto w-full overflow-x-hidden">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.url}
            target="_blank"
            className="flex gap-x-0 focus:outline-none items-center focus:scale-101 focus:translate-x-1 focus:underline hover:underline hover:scale-101 hover:translate-x-1 text-secondary transition-transform group">
            <div className="opacity-0 group-focus:mr-1 group-focus:w-4 group-hover:mr-1 group-focus:opacity-100 group-hover:opacity-100 w-0 group-hover:w-4 transition-all delay-200">
              <PaperClipIcon />
            </div>
            <p className="text-sm font-wotfardRg text-secondary">
              {link.title}
            </p>
          </Link>
        ))}
      </ul>
    </div>
  );
};
