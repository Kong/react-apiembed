# react-apiembed

React components encapsulating functionality of [apiembed](apiembed.com). Allows you to generate code snippets from HARs, all in the browser, with the power of react. [Examples](https://kong.github.io/react-apiembed)

Built with:

* [react](https://reactjs.org/)
* [hardyhar][hardyhar] - Transform HAR request object to beautiful code snippets. Core lib behind [HTTPSnippet](https://github.com/kong/httpsnippet) cli.
* [prismjs][prismjs] - Prism is a lightweight, extensible syntax highlighter.

React components included

* `<CodeSnippet .../>` - Render a code snippet from a HAR.
* `<CodeSnippetWidget .../>` - Tabbed UI for selecting languages to render individual `CodeSnippet`s
* `<Apiembed .../>` - WIP

## Setup

```bash
yarn install
# or
npm install
```

## Usage

Using as a ES module:

```jsx
import React from 'react';
import { render } from 'react-dom';
import { CodeSnippet, CodeSnippetWidget } from 'react-apiembed';

export default class MyApp extends React.Component {

  render(){
    const har = { "method": "POST", "url": "http://mockbin.com/request", "httpVersion": "HTTP/1.1", "queryString": [ { "name": "foo", "value": "bar" }, { "name": "foo", "value": "baz" } ], "headers": [ { "name": "Accept", "value": "application/json" }, { "name": "Content-Type", "value": "application/json" } ], "cookies": [ { "name": "foo", "value": "bar" }, { "name": "bar", "value": "baz" } ], "postData": { "mimeType": "application/json", "text": "{\"foo\": \"bar\"}" } }

    const snippets = {[
      {
        prismLanguage: "javascript",
        target: "javascript",
        client: "jquery"
      },
      {
        prismLanguage: "clike",
        target: "c"
      },
    ]}

    return (
      <div>
        <CodeSnippet har={har} snippet={snippets[0]} />
        <CodeSnippetWidget har={har} snippets={snippets} />
      </div>
    )
  }
}
```

## Props

### `<CodeSnippet/>`

| Name    | Required | Type   | Description                                                                                    |
| :------ | :------: | :----- | :--------------------------------------------------------------------------------------------- |
| har     |    ✔     | Object | HAR Request object as outlined [here](http://www.softwareishard.com/blog/har-12-spec/#request) |
| snippet |    ✔     | Object | Snippet object with `prismLanguage`, and [hardyhar][hardyhar] `target` and `client`            |

`snippet` properties

| Name          | Required | Default | Type   | Description                                                                                                                                   |
| :------------ | :------: | :------ | :----- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| prismLanguage |    ✔     |         | String | Prism languages. Currently supports: `bash`, `javascript`, `php`, `go`, `ruby`, `ocaml`, `ruby`, `java`, `python`, `swift`, `csharp`, `clike` |
| target        |    ✔     |         | String | [hardyhar][hardyhar] `target` prop e.g. "node", "javascript", "shell", "go" etc.                                                              |
| client        |          | `null`  | String | [hardyhar][hardyhar] `client` prop. e.g. "xhr", "curl" etc.                                                                                   |

### `<CodeSnippetWidget/>`

| Name     | Required | Type   | Description                                                                                    |
| :------- | :------: | :----- | :--------------------------------------------------------------------------------------------- |
| har      |    ✔     | Object | HAR Request object as outlined [here](http://www.softwareishard.com/blog/har-12-spec/#request) |
| snippets |    ✔     | Object | Array of snippet props                                                                         |

## Testing

```bash
npm run test
```

[prismjs]: http://prismjs.com/
[hardyhar]: https://github.com/kong/hardyhar
