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
  Header,
  Text,
  Linking,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {ListItem, Avatar} from '@rneui/themed';
import Navbar from './navbar.component';
import Test22 from './test.component';
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
    // getMoviesFromApiAsync(getMoviesFromApiAsync());
    const DATAMAP = DATA.map((item, index) => {
      return (
        <View key={index} style={styles.gameWrapper}>
          <View style={styles.headerDiv}>
            <Text style={styles.headerText}>{item.gameName}</Text>
          </View>
          <View style={styles.bottomContent}>
            {/* <View key={index} style={styles.imageDiv}> */}
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
            {/* </View> */}
            <View style={styles.textDiv}>
              {/* <Text style={styles.title}>{item.gameName}</Text> */}
              <Text style={styles.description}>{item.gameDescription}</Text>
            </View>
          </View>
        </View>
      );
    });

    return (
      <>
        {/* <SafeAreaView contentContainerStyle={styles.sectionContainer}> */}
        <View style={styles.sectionContainer}>
          <ScrollView style={styles.scrollView}>
            <Navbar />
            {/* <Button title="NullContent" /> */}
            <View>{DATAMAP}</View>
            <Test22 />
          </ScrollView>
        </View>
        {/* </SafeAreaView> */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    // overflow: 'scroll',
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: '#e5e5e5',
  },
  gameWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'scroll',
    horizontalGap: 10,
    marginTop: 40,
  },
  headerDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    minWidth: '100%',
    backgroundColor: '#163e35',
    borderBottomRightRadius: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  bottomContent: {
    display: 'flex',
    flexDirection: 'row',
  },

  textDiv: {
    display: 'flex',
    flexDirection: 'column',
    // marginTop: 32,
    marginBottom: 32,
    width: '75%',
    height: '100%',
    // padding: 8,
    justifyContent: 'center',
  },
  imageDiv: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  stretch: {
    alignSelf: 'center',
    width: 75,
    height: 100,
    // resizeMode: 'stretch',
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
