import React from "react"
import PropTypes from "prop-types"

import CodeSnippet from "./CodeSnippet"

export default class CodeSnippetWidget extends React.Component {
  static propTypes = {
    har: PropTypes.object.isRequired,
    snippets: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
    this.state = {
      active: 0
    }
  }

  getSnippetKey(snippet) {
    return `${snippet.target}${snippet.client ? `-${snippet.client}` : ""}`
  }

  clickHandler(e) {
    e.preventDefault()
    this.setState({ active: e.target.id })
  }

  render() {
    const { har } = this.props

    return (
      <div className="tabs-component">
        <div className="tabs-component-body">
          <ul role="tablist" className="tabs-component-tabs">
            {this.props.snippets.map((snippet, index) => {
              const key = this.getSnippetKey(snippet)
              return (
                <li
                  role="presentation"
                  className={
                    "tabs-component-tab" + (index == this.state.active ? " is-active" : "")
                  }
                  key={index}
                >
                  <a
                    aria-controls={`${key}`}
                    aria-selected="true"
                    role="tab"
                    className="tabs-component-tab-a"
                    id={index}
                    href={`#${key}`}
                    onClick={this.clickHandler}
                  >
                    {snippet.target}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="tabs-component-panels">
            {this.props.snippets
              .map((snippet, index) => {

                const activeTab = index == this.state.active;
                const key = this.getSnippetKey(snippet)
                return (
                  <section hidden={!activeTab} role="tabpanel" id={`${key}`} key={`#${key}`}>
                    <CodeSnippet har={this.props.har} {...snippet} />
                  </section>
                )
              })}
          </div>
        </div>
      </div>
    )
  }
}
