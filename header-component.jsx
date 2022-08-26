import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header as HeaderRNE, HeaderProps, Icon} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

class HeaderComponent2 extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount();
  }

  componentDidMount() {
    console.log('Header componentDidMount');
  }

  render() {
    return (
      <View>
        <SafeAreaProvider>
          <HeaderRNE
            style={styles.header}
            leftComponent={
              <TouchableOpacity
                onPress={() => this.props.navigation.openDrawer()}>
                <Icon name="menu" size={30} color="white" />
              </TouchableOpacity>
            }
            centerComponent={
              <Text style={styles.headerTitle}>{this.props.title}</Text>
            }
            rightComponent={
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail')}>
                <Icon name="search" size={30} color="white" />
              </TouchableOpacity>
            }
          />
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HeaderComponent2;
