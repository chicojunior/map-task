import React, { PropTypes } from 'react';
import { render } from 'react-dom';

import './Grid.styl';

export const Grid = React.createClass({

  componentDidMount: function () {
    //tive que usar um proxy para o acesso por causa do cors.
    const teamsRequest = new Request('http://localhost:1337/jiujitsuteam.herokuapp.com/teams.json');



    fetch(teamsRequest)
      .then((response) => {
        if (response.ok) {
          const data = response.text();
          console.log(data);
        } else {
          console.log('Response not ok!');
        }
      }).then((error) => {
        console.log(error);
      })
  },

  render: function () {
    return (
      <div className="Grid">

        <div className="pure-g">
          <div className="pure-u-1-4 header">
            Escola
          </div>
          <div className="pure-u-1-4 header">
            Equipe
          </div>
          <div className="pure-u-1-4 header">
            Endereço
          </div>
          <div className="pure-u-1-4 header">
            Instrutor
          </div>
        </div>

        <div className="pure-g">
          <div className="pure-u-1-4">
            Renovação
          </div>
          <div className="pure-u-1-4">
            Greenmile
          </div>
          <div className="pure-u-1-4">
            Av. Engenheiro Luís Vieira, 920, Dunas, Fortaleza, CE, Brasil
          </div>
          <div className="pure-u-1-4">
            Milfont
          </div>
        </div>

      </div>
    );
  }
});

export default Grid;
