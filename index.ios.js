'use strict';

var React = require('react-native');
var Articles = require('./components/articles');
var Podcasts = require('./components/podcasts');
var Screencasts = require('./components/screencasts');

var {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS,
  TabBarIOS,
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

var ReactNativeBlog = React.createClass({
  getInitialState: function() {
    return {
      tab: 'articles',
    }
  },

  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          icon={{uri: 'articles'}}
          title='Articles'
          onPress={() => {this.setState({ tab: 'articles' }); }}
          selected={this.state.tab === 'articles'}
        >
          <NavigatorIOS
            barTintColor='#3D728E'
            style={styles.container}
            initialRoute={{title: 'Articles', component: Articles}}
          />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={{uri: 'podcasts'}}
          title='Podcasts'
          onPress={() => {this.setState({ tab: 'podcasts' }); }}
          selected={this.state.tab === 'podcasts'}
        >
          <NavigatorIOS
            barTintColor='#3D728E'
            style={styles.container}
            initialRoute={{title: 'Podcasts', component: Podcasts}}
          />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={{uri: 'screencasts'}}
          title='Screencasts'
          onPress={() => {this.setState({ tab: 'screencasts' }); }}
          selected={this.state.tab === 'screencasts'}
        >
          <NavigatorIOS
            barTintColor='#3D728E'
            style={styles.container}
            initialRoute={{title: 'Screencasts', component: Screencasts}}
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

AppRegistry.registerComponent('ReactNativeBlog', () => ReactNativeBlog);
