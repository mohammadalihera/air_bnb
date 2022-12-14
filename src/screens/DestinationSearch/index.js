import React, {useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import styles from './style';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationSearch = () => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Where are you going" />
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={35} color={'black'} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearch;
