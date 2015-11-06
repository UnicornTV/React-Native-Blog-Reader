'use strict';

var React = require('react-native');

var {
  Image,
  StyleSheet,
  View,
  TouchableHighlight,
  ListView,
  Text,
} = React;

var styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 5,
    paddingTop: 40,
  },
});

var Screencasts = React.createClass({

  render: function() {
    return (
      <View style={styles.loading}>
        <Text style={styles.loading}>
          Fetching Screencasts, please wait...
        </Text>
      </View>
    );
  }
});

module.exports = Screencasts;