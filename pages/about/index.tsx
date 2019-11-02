import { NextPage } from 'next';
import Link from 'next/link';
import { AppLayout } from '../../src/components/organisms/AppLayout';

interface Props {}

const About: NextPage<Props> = () => {
  return (
    <AppLayout user={null}>
      <Link href="/">
        <a>Home</a>
      </Link>
    </AppLayout>
  );
};

export default About;
