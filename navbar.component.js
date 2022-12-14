import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';

function Navbar() {
  let uri = 'https://www.gamesunited.co/images/main-footer-logo-p-500.png';
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.imageDiv}
        onPress={() => {
          return Linking.openURL('https://www.facebook.com/');
        }}>
        <Image
          source={{
            uri: uri,
          }}
          style={styles.stretch}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFAE00',
    boxShadow: '0px 0px 5px #9147ff',
    height: 70,
    // padding: 10,
  },
  imageDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    padding: 5,
  },
  stretch: {
    width: '100%',
    height: '95%',
  },
});
export default Navbar;
