import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HeaderComponent extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
            <header>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Employee Management System</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Employees List</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
      </div>
    )
  }
}
