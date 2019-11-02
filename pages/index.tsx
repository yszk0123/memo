import { NextPage } from 'next';
import Link from 'next/link';
import { DefaultButton, PrimaryButton } from '../src/components/atoms/Button';
import { AppLayout } from '../src/components/organisms/AppLayout';
import { noop } from '../src/utils/noop';

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <AppLayout user={null}>
      <Link href="/about">
        <a>About</a>
      </Link>
      <DefaultButton onClick={noop}>faaaffffff</DefaultButton>
      <PrimaryButton onClick={noop}>faaaffffff</PrimaryButton>
    </AppLayout>
  );
};

export default Home;
