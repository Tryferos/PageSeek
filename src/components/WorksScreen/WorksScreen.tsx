import {BookWorkRich} from '@/types/works';
import {NotFound} from './components/NotFound';
import {BookWork} from './components/BookWork';

type Props = {
  work: BookWorkRich | null;
};
export default function WorksScreen({work}: Props) {
  if (!work) {
    return <NotFound />;
  } else {
    return <BookWork {...work} key={work._key} />;
  }
}
