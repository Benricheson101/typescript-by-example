import type {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import {getAllSlugs, getExampleBySlug} from '../util/getExample';
import type {Example} from '../util/getExample';
import {CodeBlock} from '../components/code';
import {Header} from '../components/header';

const ExamplePage: NextPage<{example: Example}> = ({example}) => {
  return (
    <div className="m-5">
      <Head>
        <title>{example.meta.title}</title>
      </Head>

      <div>
        <Header />
        <h2 className="text-center text-2xl font-semibold mb-2">
          {example.meta.title}
        </h2>

        <div className="flex md:flex-row flex-col md:divide-x md:divide-x-2 divide-gray-900 divide-y divide-y-2 md:divide-y-0">
          <div className="md:w-1/2 md:pr-5 md:pb-0 pb-5">
            <ReactMarkdown children={example.content} />
          </div>
          <div className="md:w-1/2 md:pl-5 md:pt-0 pt-5">
            <CodeBlock code={example.code} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{example: Example}> = async ({
  params,
}) => {
  const example = getExampleBySlug(params?.slug as string);
  return {props: {example}};
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: getAllSlugs().map(slug => ({params: {slug}})),
  };
};

export default ExamplePage;
