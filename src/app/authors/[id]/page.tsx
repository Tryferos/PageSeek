import {AuthorsScreen} from '@/components/AuthorsScreen/AuthorsScreen';
import {getAuthor} from '@/network/authors';

export default async function Page({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;

  const author = await getAuthor({key: id});

  return <AuthorsScreen author={author} />;
}
