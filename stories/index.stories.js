import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CodeSnippet from '../src/CodeSnippet';
import exampleHAR from './har.json';

storiesOf('CodeSnippet', module)
  .add('javascript - jquery', () => <CodeSnippet har={exampleHAR} prismLanguage="javascript" target="javascript" client="jquery" />)
  .add('javascript - xhr', () => <CodeSnippet har={exampleHAR} prismLanguage="javascript" target="javascript" client="xhr" />)
  .add('node - unirest', () => <CodeSnippet har={exampleHAR} prismLanguage="javascript" target="node" client="unirest" />)
  .add('go', () => <CodeSnippet har={exampleHAR} prismLanguage="javascript" target="go" />)
  .add('objective-c', () => <CodeSnippet har={exampleHAR} prismLanguage="objectivec" target="objc" />)
  .add('python', () => <CodeSnippet har={exampleHAR} prismLanguage="python" target="python" />)
  .add('swift', () => <CodeSnippet har={exampleHAR} prismLanguage="swift" target="swift" />)
  .add('php', () => <CodeSnippet har={exampleHAR} prismLanguage="php" target="php" />)
  .add('ruby', () => <CodeSnippet har={exampleHAR} prismLanguage="bash" target="ruby" />)
  .add('shell - curl', () => <CodeSnippet har={exampleHAR} prismLanguage="bash" target="shell" client="shell" />)
  .add('shell - httpie', () => <CodeSnippet har={exampleHAR} prismLanguage="bash" target="shell" client="httpie" />)
  .add('c', () => <CodeSnippet har={exampleHAR} prismLanguage="clike" target="c" />);
