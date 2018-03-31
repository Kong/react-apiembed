import React from "react"
import PropTypes from "prop-types"

import CodeSnippet from "./CodeSnippet"

export default class ApiEmbed extends React.Component {
  static propTypes = {
    har: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('.btn-dropdown a[data-toggle="tab"]').on("click", e => {
      e.preventDefault()

      $(".btn-dropdown .active").removeClass("active")
      $(".nav-tabs .active").removeClass("active")

      $(this).tab("show")

      $('a[href="' + $(e.target).attr("href") + '"]')
        .parent()
        .addClass("active")
    })
  }

  render() {
    const { har } = this.props

    return (
      <div>
        <div id="embed">
          <header>
            <ul className="nav nav-tabs">
              <li className="active">
                <a href="#shell-curl" data-toggle="tab" aria-expanded="true">
                  Shell
                </a>
              </li>
              <li>
                <a href="#node-unirest" data-toggle="tab">
                  Node.js
                </a>
              </li>
              <li className="hidden">
                <a href="#java-unirest" data-toggle="tab">
                  Java
                </a>
              </li>
              <li className="hidden">
                <a href="#python-requests" data-toggle="tab">
                  Python
                </a>
              </li>
            </ul>
            <div className="btn-dropdown dropdown pull-right">
              <button
                type="button"
                data-toggle="dropdown"
                className="btn btn-default dropdown-toggle"
              >
                <i className="fa fa-bars" />
              </button>
              <ul className="dropdown-menu" style={{ maxHeight: "400px" }}>
                <li>
                  <a href="#shell-curl" data-toggle="tab" className="hidden">
                    <i className="fa fa-check" /> Shell
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <div className="tab-content" style={{ maxHeight: "404px" }}>
            <div id="shell-curl" className="tab-pane fade active in">
              <button
                data-clipboard-target="shell-curl-code"
                className="btn btn-default btn-xs btn-clipboard"
              >
                <i className="fa fa-copy" />
                <span>Copy to Clipboard</span>
              </button>
              <CodeSnippet har={har} prismLanguage="bash" target="shell" client="curl" />
            </div>
            <div id="java-unirest" className="tab-pane fade">
              <button
                data-clipboard-target="java-unirest-code"
                className="btn btn-default btn-xs btn-clipboard"
              >
                <i className="fa fa-copy" />
                <span>Copy to Clipboard</span>
              </button>
              <pre>
                <code id="java-unirest-code" className="java hljs" />
              </pre>
            </div>
            <footer>
              Powered by
              <a href="https://apiembed.com/" target="_blank">
                APIembed
              </a>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}
