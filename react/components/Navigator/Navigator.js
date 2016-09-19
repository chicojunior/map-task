import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import './Navigator.styl';

export const Navigator = React.createClass({

  componentDidMount: function () {

  },

  render: function () {
    return (
      <div className="pure-menu pure-menu-horizontal pure-menu-fixed Navigator">

        <div className="Navigator__Container">
          <Link
            to="/"
            className="pure-menu-heading nav-brand Navigator__Brand">
            Francisco do Vale
          </Link>

          <ul className="pure-menu-list Navigator__Menu">

            <li className="pure-menu-item">
              <Link
                className="pure-menu-link Navigator__Link"
                to="/">Home</Link>
            </li>


            <li className="pure-menu-item">
              <a href="" className="pure-menu-link Navigator__Link">Sobre</a>
            </li>

            <li className="pure-menu-item">
              <a href="" className="pure-menu-link Navigator__Link">Experiência</a>
            </li>

            <li className="pure-menu-item">
              <a href="" className="pure-menu-link Navigator__Link">Skills</a>
            </li>

            <li className="pure-menu-item">
              <a href="" className="pure-menu-link Navigator__Link">Portfolio</a>
            </li>

            <li className="pure-menu-item">
              <a href="" className="pure-menu-link Navigator__Link">Contato</a>
            </li>



          </ul>

        </div>

        {this.props.children}

      </div>

    );
  }

});

export default Navigator;
