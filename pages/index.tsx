import { NextPage } from 'next';
import Link from 'next/link';
import { AppLayout } from '../src/components/organisms/AppLayout';

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <AppLayout user={null}>
      <Link href="/about">
        <a>About</a>
      </Link>
    </AppLayout>
  );
};

Home.getInitialProps = async ({}) => {
  return {};
};

export default Home;
