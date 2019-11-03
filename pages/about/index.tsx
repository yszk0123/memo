import { NextPage } from 'next';
import Link from 'next/link';

import { NoteAddDialog } from '../../src/components/organisms/NoteAddDialog';
import { AppLayout } from '../../src/components/templates/AppLayout';
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
      <NoteAddDialog initialText="" onCancel={noop} onSubmit={noteAdd} />
    </AppLayout>
  );
};

export default About;
