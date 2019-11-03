import { NextPage } from 'next';
import Link from 'next/link';
import { AppLayout } from '../../src/components/organisms/AppLayout';
import { NoteAddDialog } from '../../src/components/organisms/NoteAddDialog';
import { useNoteAdd } from '../../src/redux/hooks/noteHooks';
import { noop } from '../../src/utils/noop';

interface Props {}

const About: NextPage<Props> = () => {
  const noteAdd = useNoteAdd();

  return (
    <AppLayout>
      <Link href="/">
        <a>Home</a>
      </Link>
      <NoteAddDialog initialText="" onSubmit={noteAdd} onCancel={noop} />
    </AppLayout>
  );
};

export default About;
