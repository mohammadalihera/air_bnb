import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './style';

const Guest = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Adults</Text>
          <Text>Ages 13 or aboce</Text>
        </View>
        <View style={styles.buttonRow}>
          <Pressable
            onPress={() => {
              console.warn('- clicke');
            }}
            style={styles.button}>
            <Text style={{fontSize: 20}}>-</Text>
          </Pressable>
          <Text>0</Text>
          <Pressable
            nPress={() => {
              console.warn('- clicke');
            }}
            style={styles.button}>
            <Text style={{fontSize: 20}}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Guest;
