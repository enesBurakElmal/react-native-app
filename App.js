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
import DATA from './data.js';

// npx react-native run-android

class App extends Component {
  constructor(props) {
    super(props);
    // this.getMails();
    this.pageCount = 0;
    this.currentPage = 1;
    this.paginatedArray = [];
    // this.paginatedData();
  }

  paginatedData = currentPage => {
    let startIndex = (currentPage - 1) * 2;
    let endIndex = startIndex + 2;
    const dataDisplay = DATA.slice(startIndex, endIndex);
    const totalPages = Math.ceil(DATA.length / 2);
    this.pageCount = totalPages;
    return dataDisplay;
  };

  nextPageButton = () => {
    if (this.currentPage < this.pageCount) {
      this.currentPage++;
      this.paginatedArray = this.paginatedData(this.currentPage);
      console.log(this.paginatedArray, 'paginated array');
      return true;
    } else {
      return false;
    }
  };

  render() {
    const {paginatedData, pageCount, nextPageButton} = this;
    paginatedData(this.currentPage);
    console.log(nextPageButton(), 'next page button');
    console.log(
      DATA,
      'normal data',
      paginatedData(this.currentPage),
      'after paginated data',
      'total page count',
      this.pageCount,
    );

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
              <View style={styles.buttonDiv}>
                <Button
                  title="View More"
                  style={styles.button}
                  onPress={() => {
                    nextPageButton();
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      );
    });

    return (
      <>
        <SafeAreaView contentContainerStyle={styles.sectionContainer}>
          <ScrollView style={styles.scrollView}>
            <Navbar />
            <View>{DATAMAP}</View>
            <Test22 />
            <Text>{this.pageCount}</Text>
          </ScrollView>
        </SafeAreaView>
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
    marginBottom: 32,
    width: '75%',
    height: '100%',
    justifyContent: 'center',
  },
  gameDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  buttonDiv: {
    marginTop: 10,
  },
  button: {
    textAlign: 'center',
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
