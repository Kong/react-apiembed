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
      activeTab: 0,
      active: props.har.method + props.har.url + 0
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.har.url !== this.props.har.url) {
      this.setState({ active: this.props.har.method + this.props.har.url + this.state.activeTab})
    }
  }

  getSnippetKey(snippet) {
    return `${snippet.target}${snippet.client ? `-${snippet.client}` : ""}`
  }

  clickHandler(index) {
    this.setState({ active: this.props.har.method + this.props.har.url + index, activeTab: index })
  }

  render() {
    const { har } = this.props

    const uniqueId = har.method + har.url

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
                    "tabs-component-tab" + ((uniqueId + index) == this.state.active ? " is-active" : "")
                  }
                  key={index}
                >
                  <a
                    aria-controls={`${key + uniqueId}`}
                    aria-selected="true"
                    role="tab"
                    className="tabs-component-tab-a"
                    id={uniqueId + index}
                    href={`#${key + uniqueId}`}
                    onClick={() => this.clickHandler(index)}
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
                const activeTab = (uniqueId + index) == this.state.active;
                const key = this.getSnippetKey(snippet)
                return (
                  <section hidden={!activeTab} role="tabpanel" id={`${key + uniqueId}`} key={index}>
                    <CodeSnippet har={har} {...snippet} />
                  </section>
                )
              })}
          </div>
        </div>
      </div>
    )
  }
}
