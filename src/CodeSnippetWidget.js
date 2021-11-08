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

  getHarKey(harObject) {
    return harObject.method + harObject.url
  }

  render() {
    const { har } = this.props

    const harKey = this.getHarKey(har);

    return (
      <div className="tabs-component">
        <div className="tabs-component-body">
          <ul role="tablist" className="tabs-component-tabs">
            {this.props.snippets.map((snippet, index) => {
              const snippetKey = this.getSnippetKey(snippet)

              return (
                <li
                  role="presentation"
                  className={
                    "tabs-component-tab" + ((harKey + index) == this.state.active ? " is-active" : "")
                  }
                  key={index}
                >
                  <a
                    aria-controls={`${snippetKey + harKey}`}
                    aria-selected="true"
                    role="tab"
                    className="tabs-component-tab-a"
                    id={harKey + index}
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
                const activeTab = (harKey + index) == this.state.active;
                const snippetKey = this.getSnippetKey(snippet)

                return (
                  <section hidden={!activeTab} role="tabpanel" id={`${snippetKey + harKey}`} key={index}>
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
