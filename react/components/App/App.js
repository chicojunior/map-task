import React, { PropTypes } from 'react';

import './App.styl';

const App = React.createClass({

propTypes: {
  children: PropTypes.any,
},

render: function () {

  return (
    <div>
      { this.props.children }
    </div>
  );
}
});

module.exports = App;
