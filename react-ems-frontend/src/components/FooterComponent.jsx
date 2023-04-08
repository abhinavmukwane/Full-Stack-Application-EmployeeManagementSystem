import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FooterComponent extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2023 @Abhi9</span>
            </footer>
      </div>
    )
  }
}
