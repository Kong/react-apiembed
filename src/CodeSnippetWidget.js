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
    this.keypressHandler = this.keypressHandler.bind(this)
    this.state = {
      activeTab: 0,
      active: props.har.method + props.har.url + 0
    }
    this.tabRefs = Array.from({length: this.props.snippets.length}, () => React.createRef());
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.har.url !== this.props.har.url) {
      this.setState({ active: this.getHarKey(this.props.har) + this.state.activeTab})
    }

    if (prevState.activeTab !== this.state.activeTab) {
      this.tabRefs[this.state.activeTab].current.focus()
    }
  }

  getSnippetKey(snippet) {
    return `${snippet.target}${snippet.client ? `-${snippet.client}` : ""}`
  }

  clickHandler(index) {
    this.setState({ active: this.getHarKey(this.props.har) + index, activeTab: index })
  }

  keypressHandler(key, index) {
    let targetIndex = index
    const lastIndex = this.props.snippets.length - 1

    if (key === "ArrowUp" || key === "ArrowLeft") {
      if (index === 0) {
        targetIndex = lastIndex
      } else {
        targetIndex = index - 1
      }
    } else if (key === "ArrowRight" || key === "ArrowDown") {
      if (index === lastIndex) {
        targetIndex = 0
      } else {
        targetIndex = index + 1
      }
    }
    this.setState({ active: this.getHarKey(this.props.har) + targetIndex, activeTab: targetIndex })
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
                  role="tab"
                  className={
                    "tabs-component-tab" + ((harKey + index) == this.state.active ? " is-active" : "")
                  }
                  aria-controls={`${snippetKey + harKey}`}
                  onKeyUp={(e) => this.keypressHandler(e.nativeEvent.code, index)}
                  onClick={() => this.clickHandler(index)}
                  aria-selected={(harKey + index) == this.state.active}
                  tabIndex={(harKey + index) == this.state.active ? 0 : -1}
                  ref={el => this.tabRefs[index].current = el}
                  key={index}
                >
                  <a
                    role="presentation"
                    className="tabs-component-tab-a"
                    id={harKey + index}
                  >
                    {snippet.target}
                    {snippet.client && snippet.showClientInTab && ` - ${snippet.client}`}
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
