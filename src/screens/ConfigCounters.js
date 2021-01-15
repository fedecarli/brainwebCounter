import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Dimensions,
  Button,
  Alert,
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {useDispatch, useSelector} from 'react-redux';
import { createCounter, deleteCounter, changeCount } from '../store/actions/counterAction';

const { width,  height } = Dimensions.get('screen');

const ConfigCounters = props => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counters.count);
  const selectedCounter = useSelector(state => state.counters.selectedCounter);
  const counters = useSelector(state => state.counters.counters);

  const decrementCount = () => {
    // if(!counters || counters.find(i => i.id === selectedCounter).countVal === 0) {
    //   return;
    // }
    // if (!!!selectedCounter) {
    //   return Alert.alert('selecione um contador');
    // }
    let countVal = counters.find(i => i.id === selectedCounter).countVal - 1;
    dispatch(changeCount(countVal));
  };
  const incrementCount = () => {
    // if(!counters) {
    //   return;
    // }
    // if (!!!selectedCounter) {
    //   return Alert.alert('selecione um contador');
    // }
    let countVal = counters.find(i => i.id === selectedCounter).countVal + 1;
    dispatch(changeCount(countVal));
  };
  const createCounterFunc = () => {
    dispatch(createCounter());
  }
  const deleteCounterFunc = () => {
    dispatch(deleteCounter());
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
      <ScrollView style={{paddingTop: 30, paddingHorizontal: 20}}>
      <Text style={{fontWeight: 'bold', fontSize: 24, color: '#333333', }}>
        Counters
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20,}}>
        <TouchableOpacity onPress={createCounterFunc}>
          <View style={styles.button}>
            <Text style={{textAlign: 'center', color: '#14437b', fontWeight: 'bold', fontSize: 16, lineHeight: 20,}}>
              {`Add\nCounter`}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteCounterFunc} disabled={!!!selectedCounter}>
          <View style={[styles.button, {opacity: !!!selectedCounter ? 0.4 : 1,}]}>
            <Text style={{textAlign: 'center', color: '#14437b', fontWeight: 'bold', fontSize: 16, lineHeight: 20,}}>
              {`Remove\nCounter`}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={{fontWeight: 'bold', fontSize: 24, color: '#333333', marginTop: height * 0.2,}}>
        Selected Counter
      </Text>
      {!!selectedCounter ? (
        <>
        <View style={{borderColor: '#14437b', borderWidth: 4, backgroundColor: '#d8d8d8', width: width - 40, alignSelf: 'center', height: height * 0.25, marginTop: 20, justifyContent: 'space-between', opacity: 1, borderRadius: 4,}}>
          <Text style={{alignSelf: 'flex-start', fontSize: 32, fontWeight: 'bold', color: '#999999', marginLeft: 10,}}>
            {`Counter ${counters.find(i => i.id === selectedCounter).id}`}
          </Text>
          <Text style={{alignSelf: 'flex-end', fontSize: 64, fontWeight: 'bold', color: '#333333', marginRight: 10,  }}>
            {addLeftZeros(counters.find(i => i.id === selectedCounter).countVal)}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20,}}>
          <TouchableOpacity onPress={incrementCount}>
            <View style={styles.button}>
              <Text style={{textAlign: 'center', color: '#14437b', fontWeight: 'bold', fontSize: 16, lineHeight: 20,}}>
                Aumentar
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={decrementCount} disabled={counters.find(i => i.id === selectedCounter).countVal === 0}>
            <View style={[styles.button, {opacity: counters.find(i => i.id === selectedCounter).countVal === 0 ? 0.4 : 1,}]}>
              <Text style={{textAlign: 'center', color: '#14437b', fontWeight: 'bold', fontSize: 16, lineHeight: 20,}}>
                Diminuir
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        </>
      ) : (
        <View style={{borderColor: '#cccccc', borderWidth: 2, backgroundColor: 'transparent', width: width - 40, alignSelf: 'center', height: height * 0.25, marginTop: 30, justifyContent: 'center', borderRadius: 4, borderStyle: 'dashed',}}>
          <Text style={{alignSelf: 'center', fontSize: 32, fontWeight: 'bold', color: '#cccccc', marginLeft: 10,}}>
            {`Counter Controls`}
          </Text>
        </View>
      )}
      </ScrollView>
    </SafeAreaView>
  )
}

ConfigCounters.navigationOptions = ({ navigation }) => ({
  mode: 'card',
  title: 'Configuração',
  headerStyle: {
    backgroundColor: '#001c47',
    height: 80,
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
  button: {
    borderRadius: 4,
    backgroundColor: '#d8d8d8',
    width: width * 0.5 - 30,
    paddingVertical: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#444',
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
      },
      android: {
        elevation: 3,
      },
    }),
  }
});






export default ConfigCounters;