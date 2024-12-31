import {AuthorBooksSkeleton} from '@/components/AuthorsScreen/components/AuthorBooksSkeleton';
import PageSkeleton from '@/components/elements/PageSkeleton';

export default function Loading() {
  return (
    <PageSkeleton />
    // <div className="flex flex-col">
    //   <div className="-mt-20">
    //     <AuthorBooksSkeleton />
    //   </div>
    // </div>
  );
}
