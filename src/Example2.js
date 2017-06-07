import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Animated } from 'react-native';

const S_WIDTH = Dimensions.get('window').width;
const S_HEIGHT = Dimensions.get('window').height;

class Example2 extends Component {
  
  static animationOptions = {
    title: "Example 2: Animated"
  }

  constructor(props) {
    super(props);
    const ballPosition = new Animated.ValueXY({ x: 0, y: 0 });
    this.state = { ballPosition };
  }

  moveToPosition(x, y) {
    Animated.spring(this.state.ballPosition, {
      toValue: { x, y }
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.ball, this.state.ballPosition.getLayout()]} />
        <View style={styles.animationButtonsContainer}>
          <TouchableOpacity 
            style={styles.animationButton}
            onPress={() => this.moveToPosition(S_WIDTH - styles.ball.width, S_HEIGHT/2 - styles.ball.height)}>
            <Text>Position 1</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.animationButton}
            onPress={() => this.moveToPosition(0, S_HEIGHT/2 - styles.ball.height)}>
            <Text>Position 2</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.animationButton}
            onPress={() => this.moveToPosition(S_WIDTH - styles.ball.width, 0)}>
            <Text>Position 3</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.animationButton}
            onPress={() => this.moveToPosition(0, 0)}>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  ball: {
    height: 50,
    width: 50,
    borderRadius: 25,
    position: 'absolute',
    backgroundColor: 'black'
  },
  animationButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    width: S_WIDTH,
    position: 'absolute',
    bottom: 0
  },
  animationButton: {
    margin: 10
  }
}

export default Example2;