'use strict';

var React = require('react-native');
var Detail = require('./detail');

var {
  StyleSheet,
  View,
  TouchableHighlight,
  ListView,
  Text,
} = React;

var styles = StyleSheet.create({
  // Default Loading View
  loading: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    fontFamily: 'Rokkitt',
    justifyContent: 'center',
    padding: 5,
    paddingTop: 40,
  },
  // Table
  listView: {
    backgroundColor: '#F4F0E8',
    paddingTop: 60,
  },
  // Table Row
  rowContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  // Text wrapper within row
  textContainer: {
    flex: 1
  },
  // Row separator
  separator: {
    height: 1,
    backgroundColor: '#E3E0D7'
  },
  // Row Post Title
  title: {
    color: '#3D728E',
    fontFamily: 'Rokkitt',
    fontSize: 20,
  },
  // Row Post Description
  description: {
    color: '#7C705F',
    fontFamily: 'Josefin Sans',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
    textAlign: 'left',
  },
});

var REQUEST_URL = 'https://unicorn.tv/api/articles?topic=swift&api_key=l9461I3z9XhP983b14P25JSjZvuBJ6BI';

var Articles = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        });
      })
      .done();
  },

  componentDidMount: function() {
    this.fetchData();
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        style={styles.listView}
      />
    );
  },

  renderRow: function(data) {
    return (
      <TouchableHighlight onPress={() => this.rowPressed(data)} underlayColor='#e3e0d7'>
        <View>
          <View style={styles.rowContainer}>
            <View  style={styles.textContainer}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.description} numberOfLines={0}>{data.description}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  },

  rowPressed: function (data) {
    console.log('row press');

    // Comment this out if you'd like to test without defining the detail view
    this.props.navigator.push({
      title: undefined,
      component: Detail,
      passProps: {data: data}
    });
  },

  renderLoadingView: function() {
    return (
      <View style={styles.loading}>
        <Text style={styles.loading}>
          Fetching articles, please wait...
        </Text>
      </View>
    );
  },
});

module.exports = Articles;