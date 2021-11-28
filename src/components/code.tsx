import {FunctionComponent} from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/github';
import clsx from 'clsx';

export const CodeBlock: FunctionComponent<{code: string}> = ({code}) => {
  return (
    <Highlight {...defaultProps} theme={github} code={code} language="tsx">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre
          className={clsx(className, 'p-2', 'overflow-scroll')}
          style={style}
        >
          {tokens.map((l, i) => (
            <div {...getLineProps({line: l, key: i})}>
              {l.map((t, k) => (
                <span {...getTokenProps({token: t, key: k})}></span>
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
