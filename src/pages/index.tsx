import type {GetStaticProps, NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';

import {Header} from '../components/header';
import {Example, getAllExampleMetadata} from '../util/getExample';

const Home: NextPage<{metadata: Example['meta'][]}> = ({metadata}) => {
  return (
    <div className="m-5">
      <Head>
        <title>TypeScript By Example</title>
      </Head>

      <Header />

      <div className="flex justify-center">
        <ul className="list-disc">
          {metadata.map((m, i) => (
            <li key={i}>
              <Link href={`/${m.slug}`}>
                <a>{m.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  metadata: Example['meta'][];
}> = async () => {
  const metadata = getAllExampleMetadata();
  return {props: {metadata}};
};

export default Home;

// TODO: pages to write:
// Interfaces
// Type vs Interface
// Type Inference
// Any
// Any vs Unknown
// Classes
// Inheritance
// Implements
// Advanced Types
// Literal vs Object
// Interface Inheritance
// Type Unions
// Enums
// Unknown
// Constants
// Abstract Classes
// Type Inheritance
// Generics
// Utility Types
// TSX

// TODO: figure out how to order examples on the homepage
// TODO: some sort of navigation menu on example pages
