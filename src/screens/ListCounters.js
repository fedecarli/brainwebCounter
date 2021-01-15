/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import { selectCounter, } from '../store/actions/counterAction';

const { width,  height } = Dimensions.get('screen');

const ListCounters = props => {

  const selectedCounter = useSelector(state => state.counters.selectedCounter);
  const counters = useSelector(state => state.counters.counters);
  const dispatch = useDispatch();

  const selectCounterFunc = (identif) => {
    if (selectedCounter === identif) {
      return dispatch(selectCounter(null));
    }
    dispatch(selectCounter(identif));
  }

  const addLeftZeros = (val) => {
    let value = String(val)
    console.log('value.length :>> ', value.length);
    if (value.length >= 4) {
      return val
    }
    if (value.length === 3) {
      return `0${val}`
    }
    if (value.length === 2) {
      return `00${val}`
    }
    if (value.length === 1) {
      return `000${val}`
    }
  }


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#0082c9'}}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.container}>
        {counters.length > 0 ? counters.map((item) => (
          <TouchableOpacity onPress={() => selectCounterFunc(item.id)}>
            <View style={{borderColor: '#14437b', borderWidth: selectedCounter === item.id ? 4 : 0, backgroundColor: '#d8d8d8', width: width - 40, alignSelf: 'center', height: height * 0.25, marginTop: 30, justifyContent: 'space-between', opacity: selectedCounter === item.id ? 1 : 0.4, borderRadius: 4,}}>
              <Text style={{alignSelf: 'flex-start', fontSize: 32, fontWeight: 'bold', color: '#999999', marginLeft: 10,}}>
                {`Counter ${item.id}`}
              </Text>
              <Text style={{alignSelf: 'flex-end', fontSize: 64, fontWeight: 'bold', color: '#333333', marginRight: 10,  }}>
                {addLeftZeros(item.countVal)}
              </Text>
            </View>
          </TouchableOpacity>
        )) : (
          <View style={{alignSelf: 'center', marginTop: height * 0.3, width: width * 0.7, }}>
            <Text style={{fontWeight: 'bold', fontSize: 12, color: '#ccc', textAlign: 'center', lineHeight: 20,}}>
              {`Crie contador na página de configuração`.toUpperCase()}
            </Text>
          </View>
        )}
        </ScrollView>
    </SafeAreaView>
  );
};

ListCounters.navigationOptions = ({ navigation }) => ({
  // mode: 'card',
  title: 'Contadores',
  headerStyle: {
    backgroundColor: '#001c47',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  // headerMode: '',
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0082c9',
  },
});

export default ListCounters
