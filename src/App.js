import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { List, ListItem } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class App extends React.Component {
  
  static navigationOptions = {
    title: 'Animation Examples'
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <List style={{ width: SCREEN_WIDTH }}>
          <ListItem 
            title={"1. LayoutAnimation module"} 
            onPress={() => navigate('Example1') }
          />
          <ListItem 
            title={"2. Animated module"}
            onPress={() => navigate('Example2') }
          />
          <ListItem 
            title={"3. PanResponder module"}
            onPress={() => navigate('Example3') }
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
 
export default App;