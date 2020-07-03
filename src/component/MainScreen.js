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
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Animated,
  Image,
  Easing,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {getCurrentTemp, getNextTemp, getNextByInput} from './API';

const widthScreen = Dimensions.get('window').width;

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: '',
      nextTemp: '',
      loading: false,
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
            fontSize: 20,
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

    if (this.state.currentTemp && this.state.nextTemp) {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const {currentTemp, nextTemp, loading} = this.state;

    return (
      <View style={styles.background}>
        {this.renderLottie(require('../lottie/sun.json'), styles.sun)}
        {this.renderLottie(require('../lottie/snownight.json'), styles.snow)}

        <View>
          <View>
            {this.renderTemperature(currentTemp)}
            {this.renderStatus('NOW')}
          </View>
          <View>
            {this.renderTemperature(nextTemp)}
            {this.renderStatus('NEXT')}
          </View>

          <View style={{width: 200, alignSelf: 'center'}}>
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
        </View>
      </View>
    );
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  iconGet: {
    width: 40,
    height: 40,
  },
  buttonGet: {
    marginTop: 20,
    width: 150,
    height: 70,
    backgroundColor: '#F3C71E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    alignSelf: 'center',
  },

  status: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    width: 90,
    height: 30,
    top: -10,
    right: -10,
  },

  icon: {
    width: 50,
    height: 50,
  },

  fontNumber: {
    alignSelf: 'flex-end',
    fontFamily: 'Ubuntu-Bold',
    fontSize: 100,
    color: '#F3C71E',
    marginHorizontal: 10,
  },

  fontCelsius: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 30,
    color: '#ffc0cb',
  },
  background: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  temperatureNow: {
    borderWidth: 1,
    borderColor: '#F3C71E',
    borderRadius: 40,
    borderTopRightRadius: 0,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  cloud: {
    position: 'absolute',
    width: 200,
    height: 200,
    bottom: 70,
    right: -20,
  },

  snow: {
    position: 'absolute',
    width: 200,
    height: 200,
    top: 10,
    left: -20,
  },

  sun: {
    position: 'absolute',
    width: 400,
    height: 400,
    top: -80,
    right: -80,
  },

  loading: {
    position: 'absolute',
    width: 70,
    height: 70,
    top: 10,
    right: -20,
  },
});
