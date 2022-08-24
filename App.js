/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Linking,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Button} from '@react-native-material/core';

const DATA = [
  {
    gameName: 'Counter Strike: Global Offensive',
    gameLink:
      'https://store.steampowered.com/app/730/Counter_Strike_Global_Offensive/',
    gameImage:
      'https://seeklogo.com/images/C/csgo-logo-CAA0A4D48A-seeklogo.com.png',
    gameDescription:
      'Counter Strike: Global Offensive (CS:GO) is a first-person shooter video game developed by Hidden Path Entertainment and Valve Corporation. It is the fourth game in the Counter-Strike series and the successor to the previous Counter-Strike: Source game, which was released in 2002. The game was released for Microsoft Windows, OS X, and Linux in March 2012. It is the first game in the series to be released for the Nintendo Switch.',
  },
  {
    gameName: 'Valorant',
    gameLink: 'https://valorant.com/',
    gameImage:
      'https://images.cults3d.com/4QqRV9kLYYEuw9ur_X3yjQl1sjk=/516x516/https://files.cults3d.com/uploaders/15024335/illustration-file/a86d53e4-2bd9-4a8f-9550-986686c3131a/gi0mAjIh_400x400.png',
    gameDescription:
      'Valorant is a free-to-play multiplayer battle royale game developed and published by Respawn Entertainment. It is the first game in the Respawn Entertainment series of games, and the first game to be released for the Nintendo Switch. The game was released for Microsoft Windows, OS X, and Linux in November 2018. It is the first game in the series to be released for the Nintendo Switch.',
  },
];
// npx react-native run-android

class App extends Component {
  constructor(props) {
    super(props);
    this.getMails();
  }

  getMails = () => {};

  render() {
    const DATAMAP = DATA.map((item, index) => {
      return (
        <View key={index} style={styles.enes}>
          <View key={index} style={styles.imageDiv}>
            <TouchableOpacity
              style={styles.imageDiv}
              onPress={() => {
                return Linking.openURL(item.gameLink);
              }}>
              <Image
                key={index}
                style={styles.stretch}
                source={{
                  uri: item.gameImage,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.textDiv}>
            <Text style={styles.title}>{item.gameName}</Text>
            <Text style={styles.description}>{item.gameDescription}</Text>
          </View>
        </View>
      );
    });

    return (
      <>
        <View style={styles.sectionContainer}>
          <Button title="NullContent" />
          <View>{DATAMAP}</View>
        </View>
        <Text onPress={() => Linking.openURL('http://google.com')}>sadas</Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    // marginTop: 32,
    // paddingHorizontal: 24,
    display: 'flex',
    // flexDirection: 'column',
    overflow: 'scroll',
  },
  gameContainer: {
    display: 'flex',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-between',
    // marginTop: 32,
  },
  enes: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 32,
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 32,
    width: '100%',
    height: '100%',
    // flex: 1,
  },
  textDiv: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: '60%',
    // height: '100%',
  },
  imageDiv: {
    // width: '25%',
    // height: '100%',
    justifyContent: 'center',
    paddingRight: 10,

    border: '1px solid blue',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
  },

  stretch: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
    borderRadius: 50,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
