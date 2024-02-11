import React from "react"
import PropTypes from "prop-types"
import Prism from 'prismjs'
import { HTTPSnippet } from 'httpsnippet'


export default class CodeSnippet extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { har, target, client, prismLanguage, tabIndex, passedRef, keypressHandler } = this.props

    // TODO: httpsnippet should expose isLanguageSupported() method
    // TODO: httpsnippet and prism should have mappings for single language prop

    const code = new HTTPSnippet(har).convert(target, client)

    const codeHTML = {
      __html: `${Prism.highlight(code, Prism.languages[prismLanguage], prismLanguage).replaceAll('<span', '<span role="text"')}`
    }

    return (
      <pre className={`language-${this.props.prismLanguage}`} onKeyDown={keypressHandler}>
        <code className={`language-${this.props.prismLanguage}`}>
          <div ref={passedRef} tabIndex={tabIndex} dangerouslySetInnerHTML={codeHTML} />
        </code>
      </pre>
    )
  }
}

CodeSnippet.propTypes = {
  har: PropTypes.object.isRequired,
  target: PropTypes.string.isRequired,
  client: PropTypes.string,
  showClientInTab: PropTypes.bool,
  prismLanguage: PropTypes.string.isRequired,
  tabIndex: PropTypes.number,
  passedRef: PropTypes.func,
  keypressHandler: PropTypes.func
}
