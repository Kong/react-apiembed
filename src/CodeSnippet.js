import React from "react"
import PropTypes from "prop-types"
import hardyHAR from 'hardyhar'
import Prism from "prismjs"


export default class CodeSnippet extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { har, target, client, prismLanguage } = this.props
    // loadLanguages([prismLanguage])

    // TODO: httpsnippet should expose isLanguageSupported() method
    // TODO: httpsnippet and prism should have mappings for single language prop

    const code = new hardyHAR(har).convert(target, client)
    const codeHTML = {
      __html: Prism.highlight(code, Prism.languages[prismLanguage], prismLanguage)
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
  prismLanguage: PropTypes.string.isRequired
}
