import React from "react"
import PropTypes from "prop-types"
import Prism from "prismjs"
import HTTPSnippet from 'httpsnippet'

/**
 * Importing manually since prism method loadlanguages is a dynamic import
 * which isn't supported by rollup.
 */
import "prismjs/components/prism-bash.min"
import "prismjs/components/prism-javascript.min"
import "prismjs/components/prism-php.min"
import "prismjs/components/prism-go.min"
import "prismjs/components/prism-ruby.min"
import "prismjs/components/prism-ocaml.min"
import "prismjs/components/prism-ruby.min"
import "prismjs/components/prism-java.min"
import "prismjs/components/prism-python.min"
import "prismjs/components/prism-swift.min"
import "prismjs/components/prism-csharp.min"

export default class CodeSnippet extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { har, target, client, prismLanguage } = this.props
    // loadLanguages([prismLanguage])

    // TODO: httpsnippet should expose isLanguageSupported() method
    // TODO: httpsnippet and prism should have mappings for single language prop

    const code = new HTTPSnippet(har).convert(target, client)
    const codeHTML = {
      __html: `<div tabindex="0">${Prism.highlight(code, Prism.languages[prismLanguage], prismLanguage).replaceAll('<span', '<span role="text"')}</div>`
    }

    return (
      <pre className={`language-${this.props.prismLanguage}`}>
        <code
          className={`language-${this.props.prismLanguage}`}
          dangerouslySetInnerHTML={codeHTML}
        />
      </pre>
    )
  }
}

CodeSnippet.propTypes = {
  har: PropTypes.object.isRequired,
  target: PropTypes.string.isRequired,
  client: PropTypes.string,
  showClientInTab: PropTypes.boolean,
  prismLanguage: PropTypes.string.isRequired
}
