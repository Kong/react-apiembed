import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import CodeSnippet from "../src/CodeSnippet"
import CodeSnippetWidget from "../src/CodeSnippetWidget"
import ApiEmbed from "../src/ApiEmbed"

import exampleHAR from "./har.json"

storiesOf("CodeSnippet", module)
  .add("javascript - jquery", () => (
    <CodeSnippet har={exampleHAR} prismLanguage="javascript" target="javascript" client="jquery" />
  ))
  .add("javascript - xhr", () => (
    <CodeSnippet har={exampleHAR} prismLanguage="javascript" target="javascript" client="xhr" />
  ))
  .add("node - unirest", () => (
    <CodeSnippet har={exampleHAR} prismLanguage="javascript" target="node" client="unirest" />
  ))
  .add("go", () => <CodeSnippet har={exampleHAR} prismLanguage="javascript" target="go" />)
  .add("python", () => <CodeSnippet har={exampleHAR} prismLanguage="python" target="python" />)
  .add("swift", () => <CodeSnippet har={exampleHAR} prismLanguage="swift" target="swift" />)
  .add("php", () => <CodeSnippet har={exampleHAR} prismLanguage="php" target="php" />)
  .add("ruby", () => <CodeSnippet har={exampleHAR} prismLanguage="bash" target="ruby" />)
  .add("shell - curl", () => (
    <CodeSnippet har={exampleHAR} prismLanguage="bash" target="shell" client="shell" />
  ))
  .add("shell - httpie", () => (
    <CodeSnippet har={exampleHAR} prismLanguage="bash" target="shell" client="httpie" />
  ))
  .add("c", () => <CodeSnippet har={exampleHAR} prismLanguage="clike" target="c" />)
  .add("ocaml", () => (
    <CodeSnippet har={exampleHAR} prismLanguage="ocaml" target="ocaml" />
  ))
  .add("c#", () => (
    <CodeSnippet har={exampleHAR} prismLanguage="csharp" target="csharp" />
  ))

storiesOf("ApiEmbed", module).add("default", () => {
  return (
    <div style={{ padding: "20px" }}>
      <p>
        If this isn't functional, you may need to enable the scripts in "preview-head.html" inside
        storybook.
      </p>
      <ApiEmbed har={exampleHAR} />
    </div>
  )
})

storiesOf("CodeSnippetWidget", module).add("one language", () => (
  <CodeSnippetWidget
    har={exampleHAR}
    snippets={[
      {
        prismLanguage: "javascript",
        target: "javascript",
        client: "xhr"
      }
    ]}
  />
)).add("two languages", () => (
  <CodeSnippetWidget
    har={exampleHAR}
    snippets={[
      {
        prismLanguage: "javascript",
        target: "javascript",
        client: "jquery"
      },
      {
        prismLanguage: "go",
        target: "go"
      }
    ]}
  />
)).add("five languages", () => (
  <CodeSnippetWidget
    har={exampleHAR}
    snippets={[
      {
        prismLanguage: "javascript",
        target: "javascript",
        client: "jquery"
      },
      {
        prismLanguage: "go",
        target: "go"
      },
      {
        prismLanguage: "bash",
        target: "shell",
        client: "curl"
      },
      {
        prismLanguage: "ruby",
        target: "ruby"
      },
      {
        prismLanguage: "clike",
        target: "c"
      },
    ]}
  />
))
