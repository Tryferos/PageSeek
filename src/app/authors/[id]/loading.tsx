import {AuthorBooksSkeleton} from '@/components/AuthorsScreen/components/AuthorBooksSkeleton';
import PageSkeleton from '@/components/elements/PageSkeleton';

export default function Loading() {
  return (
    <div className="flex flex-col">
      <PageSkeleton />
      <div className="-mt-20">
        <AuthorBooksSkeleton />
      </div>
    </div>
  );
}
