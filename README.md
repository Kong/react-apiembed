# react-apiembed

[![version][version-badge]][package]

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
import React from "react"
import { render } from "react-dom"
import { CodeSnippet, CodeSnippetWidget } from "react-apiembed"

class MyApp extends React.Component {
  render() {
    const har = {
      method: "POST",
      url: "http://mockbin.com/request",
      httpVersion: "HTTP/1.1",
      queryString: [{ name: "foo", value: "bar" }, { name: "foo", value: "baz" }],
      headers: [
        { name: "Accept", value: "application/json" },
        { name: "Content-Type", value: "application/json" }
      ],
      cookies: [{ name: "foo", value: "bar" }, { name: "bar", value: "baz" }],
      postData: { mimeType: "application/json", text: '{"foo": "bar"}' }
    }

    return (
      <div>
        <CodeSnippet har={har} prismLanguage="javascript" target="javascript" client="jquery" />
        <CodeSnippetWidget
          har={har}
          snippets={[
            {
              prismLanguage: "go",
              target: "go"
            },
            {
              prismLanguage: "bash",
              target: "shell",
              client: "curl"
            }
          ]}
        />
      </div>
    )
  }
}

render(<MyApp />, document.getElementById("root"))
```

## Props

### `<CodeSnippet/>`

| Name          | Required | Default | Type   | Description|
| :------------ | :------: | :------ | :----- | :-----|
| har           |    ✔     |         | Object | HAR Request object as outlined [here](http://www.softwareishard.com/blog/har-12-spec/#request)|
| prismLanguage |    ✔     |         | String | Prism languages. Currently supports: `bash`, `javascript`, `php`, `go`, `ruby`, `ocaml`, `ruby`, `java`, `python`, `swift`, `csharp`, `clike`|
| target        |    ✔     |         | String | [hardyhar][hardyhar] `target` prop e.g. "node", "javascript", "shell", "go" etc.|
| client        |          | `null`  | String | [hardyhar][hardyhar] `client` prop. e.g. "xhr", "curl" etc.|

### `<CodeSnippetWidget/>`

| Name     | Required | Type   | Description                                                                                    |
| :------- | :------: | :----- | :--------------------------------------------------------------------------------------------- |
| har      |    ✔     | Object | HAR Request object as outlined [here](http://www.softwareishard.com/blog/har-12-spec/#request) |
| snippets |    ✔     | Object | Array of snippet objects                                                                       |

`snippet` properties

| Name          | Required | Default | Type   | Description                                                                      |
| :------------ | :------: | :------ | :----- | :------------------------------------------------------------------------------- |
| prismLanguage |    ✔     |         | String | Prism languages. See above for supported languages.                              |
| target        |    ✔     |         | String | [hardyhar][hardyhar] `target` prop e.g. "node", "javascript", "shell", "go" etc. |
| client        |          | `null`  | String | [hardyhar][hardyhar] `client` prop. e.g. "xhr", "curl" etc.                      |

## Testing

```bash
npm run test
```

[prismjs]: http://prismjs.com/
[hardyhar]: https://github.com/kong/hardyhar

[version-badge]: https://img.shields.io/npm/v/react-apiembed.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-apiembed
[license-badge]: https://img.shields.io/npm/l/react-apiembed.svg?style=flat-square
