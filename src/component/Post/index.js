import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles.js';

const Post = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.post.image}} />
      <Text style={styles.bedrooms}>
        {props.post.bed} bed {props.post.bedrooms} bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {props.post.title}{' '}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${props.post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${props.post.newPrice} </Text>
        /night
      </Text>

      <Text style={styles.totalPrice}>${props.post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
