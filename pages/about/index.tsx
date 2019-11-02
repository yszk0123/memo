import { NextPage } from 'next';
import Link from 'next/link';

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
};

About.getInitialProps = async ({}) => {
  return {};
};

export default About;
