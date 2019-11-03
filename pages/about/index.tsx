import { NextPage } from 'next';
import Link from 'next/link';
import { AppLayout } from '../../src/components/organisms/AppLayout';

interface Props {}

const About: NextPage<Props> = () => {
  return (
    <AppLayout>
      <Link href="/">
        <a>Home</a>
      </Link>
    </AppLayout>
  );
};

export default About;
