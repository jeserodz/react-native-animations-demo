import React, { Component } from 'react';
import { View, Text, LayoutAnimation } from 'react-native';
import { Card, Button, ListItem } from 'react-native-elements';

class Example1 extends Component {

  static navigationOptions = {
    title: 'Example 1: LayoutAnimation'
  }

  state = {
    showDetails: false
  }

  componentWillMount() {
    LayoutAnimation.spring();
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  showDetailsArea() {
    const height = this.state.showDetails ? null : 0;
    return <View style={[styles.detailsArea, { height }]}>
      <ListItem title="Details here..." hideChevron />
      <ListItem title="Toggle me smoothly!!!" hideChevron />
    </View>
  }

  render() {
    return (
      <View style={styles.container}>
        <Card title="Card animated with LayoutAnimation">
          <ListItem 
            title="Press the button to toggle the details area."
            hideChevron 
          />
          { this.showDetailsArea() }
          <View>
            <Button 
              title="Toggle Details" 
              backgrounColor="#E51A58"
              onPress={() => this.setState({ showDetails: !this.state.showDetails })}
            />
          </View>
        </Card>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  detailsArea: { 
    backgroundColor: '#ededed', 
    marginTop: 10, 
    marginBottom: 10 
  }
}

export default Example1;