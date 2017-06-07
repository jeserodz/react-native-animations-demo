import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Dimensions, 
  Animated, 
  PanResponder 
} from 'react-native'

const S_WIDTH = Dimensions.get('window').width;
const S_HEIGHT = Dimensions.get('window').height;

class Example3 extends Component {
  static navigationOptions = {
    title: "Example 3: PanResponder"
  }

  constructor(props) {
    super(props);
    const slideButtonPosition = new Animated.ValueXY({ x: 0, y: 0 });
    const slideButtonResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestures) => {
        slideButtonPosition.setValue({ x: gestures.dx, y: 0 });
      },
      onPanResponderRelease: (event, gestures) => {
        Animated.timing(slideButtonPosition, {
          toValue: { x: 0, y: 0},
          duration: 250,
        }).start();
      },
    });

    this.state = { slideButtonPosition, slideButtonResponder };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.slideButtonContainer}>
          <Text style={styles.slideHint}>Slide To Unlock</Text>
          <Animated.View 
            {...this.state.slideButtonResponder.panHandlers}
            style={[styles.slideButton, this.state.slideButtonPosition.getLayout()]}
          />
        </View>
      </View>
    );
  }
}

styles = {
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  slideButtonContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    borderWidth: 1,
    borderColor: '#cecece',
    borderRadius: 10,
  },
  slideHint: {
    color: 'white',
    fontSize: 20
  },
  slideButton: {
    position: 'absolute',
    left: 0,
    height: 58,
    width: 80,
    backgroundColor: 'purple',
    borderRadius: 10
  }
}

export default Example3;