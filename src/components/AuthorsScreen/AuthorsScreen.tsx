import {Author} from '@/types/author';
import {AuthorInfo} from './components/AuthorInfo';
import {NotFound} from '../client/NotFound';

type Props = {
  author?: Author | null;
};
export const AuthorsScreen = ({author}: Props) => {
  if (author) {
    return <AuthorInfo {...author} key={author._key} />;
  } else {
    return <NotFound />;
  }
};
