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
        <h2 className="mb-2 text-2xl font-semibold text-center">
          {example.meta.title}
        </h2>

        <div className="flex flex-col divide-y-2 divide-y divide-gray-900 md:flex-row md:divide-y-0 md:divide-x-2 md:divide-x">
          <div className="pb-5 md:pr-5 md:pb-0 md:w-1/2">
            <ReactMarkdown children={example.content} />
          </div>
          <div className="pt-5 md:pt-0 md:pl-5 md:w-1/2">
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
