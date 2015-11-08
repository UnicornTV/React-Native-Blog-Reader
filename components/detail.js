'use strict';

var React = require('react-native');

var {
  StyleSheet,
  WebView,
} = React;

var styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
  },
});

var DetailView = React.createClass({

  render: function() {
    return (
      <WebView style={styles.body} url={this.props.data.url + '?display=embedded'} />
    );
  }

});

module.exports = DetailView;