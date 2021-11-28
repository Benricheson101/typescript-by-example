import type {FunctionComponent} from 'react';
import Link from 'next/link';

export const Header: FunctionComponent = () => {
  return (
    <h1 className="text-center text-3xl font-semibold mb-2">
      <Link href="/">
        <a>
          <span className="text-logo-typescript">
            Type
            <span className="font-normal">Script</span>
          </span>{' '}
          By Example
        </a>
      </Link>
    </h1>
  );
};
