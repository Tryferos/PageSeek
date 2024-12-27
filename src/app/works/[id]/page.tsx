import WorksScreen from '@/components/WorksScreen/WorksScreen';
import {getBookWorkRich} from '@/network/works';

export default async function Page({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const book = await getBookWorkRich({key: id});
  return <WorksScreen work={book} />;
}
