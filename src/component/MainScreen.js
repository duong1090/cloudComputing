/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Animated,
  Platform,
  TextInput,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {getCurrentTemp, getNextTemp, getNextByInput} from './API';
import Interactable from 'react-native-interactable';
import variables from './variables/commonColor';
import moment from 'moment';

const DELTA_HEIGHT = variables.isIphoneX ? variables.scale(80) : 0;
const RATIO = 1.5;

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: '0',
      nextTemp: '0',
      loading: false,
      updatedAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
      inputValue: '',
      keyboardOffset: new Animated.Value(0),
    };
  }

  componentDidMount = () => {
    getCurrentTemp().then((res) => {
      this.setState({
        currentTemp: +parseFloat(res.currentTemp).toFixed(2),
      });
    });

    getNextTemp().then((res) => {
      this.setState({
        nextTemp: +parseFloat(res.nextTemp).toFixed(2),
      });
    });
  };

  renderStatus = (text) => {
    return (
      <View style={styles.status}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: variables.scale(20 * RATIO),
            fontFamily: 'Ubuntu-Bold',
          }}>
          {text}
        </Text>
      </View>
    );
  };

  renderTemperature = (temp) => (
    <View style={styles.temperatureNow}>
      <Image
        style={styles.icon}
        source={require('../../assets/icons/thermometer.png')}
      />
      <Text style={styles.fontNumber}>{temp}</Text>
      <Text style={styles.fontCelsius}>°C</Text>
    </View>
  );

  renderLottie = (source, style) => (
    <LottieView style={style} source={source} autoPlay={true} loop />
  );

  getInformation = async () => {
    await this.setState({
      loading: true,
    });

    if (this.state.inputValue === '') {
      await getCurrentTemp().then((res) => {
        this.setState({
          currentTemp: +parseFloat(res.currentTemp).toFixed(2),
        });
      });

      await getNextTemp().then((res) => {
        this.setState({
          nextTemp: +parseFloat(res.nextTemp).toFixed(2),
        });
      });
    } else {
      await getNextByInput(this.state.inputValue)
        .then((res) => {
          this.setState({
            currentTemp: +parseFloat(this.state.inputValue).toFixed(2),
            nextTemp: +parseFloat(res.nextTemp).toFixed(2),
          });
        })
        .catch(() => {
          ToastAndroid.show(
            'We have no result with this temperature',
            ToastAndroid.SHORT,
          );
          this.setState({
            loading: false,
          });
        });
    }

    if (this.state.currentTemp && this.state.nextTemp) {
      this.setState({
        loading: false,
        updatedAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
      });
    }
  };

  changeText = (text) => {
    this.setState({
      inputValue: text,
    });
  };

  render() {
    const {
      currentTemp,
      nextTemp,
      loading,
      keyboardOffset,
      updatedAt,
    } = this.state;

    return (
      <View style={styles.background}>
        {this.renderLottie(require('../lottie/sun.json'), styles.sun)}
        {this.renderLottie(require('../lottie/snownight.json'), styles.snow)}
        <Text
          style={{
            fontFamily: 'Ubuntu-Bold',
            fontSize: variables.scale(30),
            color: 'grey',
            marginBottom: variables.scale(30 * RATIO),
          }}>
          Updated at: {updatedAt}
        </Text>

        <View>
          <View>
            {this.renderTemperature(currentTemp)}
            {this.renderStatus('NOW')}
          </View>
          <View>
            {this.renderTemperature(nextTemp)}
            {this.renderStatus('NEXT')}
          </View>

          <View
            style={{width: variables.scale(300 * RATIO), alignSelf: 'center'}}>
            <TouchableOpacity
              onPress={() => this.getInformation()}
              style={styles.buttonGet}>
              <Image
                style={styles.iconGet}
                source={require('../../assets/icons/tap.png')}
              />
            </TouchableOpacity>
            {loading
              ? this.renderLottie(
                  require('../lottie/loading.json'),
                  styles.loading,
                )
              : null}
          </View>
          <Animated.View
            style={[
              styles.input,
              {
                bottom: Platform.select({
                  ios: keyboardOffset,
                  android: 0,
                }),
              },
            ]}>
            <TextInput
              style={{
                textAlign: 'center',
                fontFamily: 'Ubuntu-Bold',
                fontSize: variables.scale(50),
                color: '#fff',
              }}
              onChangeText={(text) => this.changeText(text)}
              value={this.state.inputValue}
            />
          </Animated.View>
        </View>
      </View>
    );
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  input: {
    width: variables.scale(300),
    alignSelf: 'center',
    borderBottomLeftRadius: variables.scale(50),
    borderBottomRightRadius: variables.scale(50),
    backgroundColor: 'red',
  },
  iconGet: {
    width: variables.scale(40 * RATIO),
    height: variables.scale(40 * RATIO),
  },
  buttonGet: {
    width: variables.scale(250 * RATIO),
    height: variables.scale(90 * RATIO),
    backgroundColor: '#F3C71E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: variables.scale(30 * RATIO),
    alignSelf: 'center',
  },

  status: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: variables.scale(20 * RATIO),
    justifyContent: 'center',
    width: variables.scale(90 * RATIO),
    height: variables.scale(30 * RATIO),
    top: variables.scale(-10 * RATIO),
    right: variables.scale(-10 * RATIO),
  },

  icon: {
    width: variables.scale(50 * RATIO),
    height: variables.scale(50 * RATIO),
  },

  fontNumber: {
    alignSelf: 'flex-end',
    fontFamily: 'Ubuntu-Bold',
    fontSize: variables.scale(100 * RATIO),
    color: '#F3C71E',
    marginHorizontal: variables.scale(10 * RATIO),
  },

  fontCelsius: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: variables.scale(30 * RATIO),
    color: '#ffc0cb',
  },
  background: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  temperatureNow: {
    borderWidth: variables.scale(1 * RATIO),
    borderColor: '#F3C71E',
    borderRadius: variables.scale(40 * RATIO),
    borderTopRightRadius: 0,
    padding: variables.scale(10 * RATIO),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: variables.scale(30 * RATIO),
  },

  cloud: {
    position: 'absolute',
    width: variables.scale(200 * RATIO),
    height: variables.scale(200 * RATIO),
    bottom: variables.scale(70 * RATIO),
    right: variables.scale(-20 * RATIO),
  },

  snow: {
    position: 'absolute',
    width: variables.scale(200 * RATIO),
    height: variables.scale(200 * RATIO),
    top: variables.scale(10 * RATIO),
    left: variables.scale(-20 * RATIO),
  },

  sun: {
    position: 'absolute',
    width: variables.scale(400 * RATIO),
    height: variables.scale(400 * RATIO),
    top: variables.scale(-80 * RATIO),
    right: variables.scale(-80 * RATIO),
  },

  loading: {
    position: 'absolute',
    width: variables.scale(70 * RATIO),
    height: variables.scale(70 * RATIO),
    top: variables.scale(10 * RATIO),
    right: variables.scale(-20 * RATIO),
  },
});
