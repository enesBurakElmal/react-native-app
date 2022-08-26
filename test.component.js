import React, {useEffect, useState, Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Header,
  Text,
  Linking,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StatusBar,
  SafeAreaView,
  FlatList,
  AppRegistry,
} from 'react-native';
import axios from 'axios';

class Test22 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      randomUserData: [],
      loadingExtraData: false,
      page: 1,
      advice: '',
    };
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    // useEffect(() => {
    // axios
    //   .get('https://randomuser.me/api/?results=10')
    //   .then(response => {
    //     console.log(response, 'sa');
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // }, []);
    const getAdvice = () => {
      // useEffect(() => {
      axios.get('https://api.github.com/users/hadley/orgs').then(response => {
        console.log(response.data, 'sa');
        this.setState({
          randomUserData: response,
        });
      });
      // }, []);
    };

    // getAdvice();
  }

  render() {
    const {randomUserData} = this.state;
    console.log(randomUserData, 'advice');
    return (
      <View>
        <Text>Sasasaa22</Text>
      </View>
    );
  }
}
export default Test22;
