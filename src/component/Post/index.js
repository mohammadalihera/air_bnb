import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles.js';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: 'https://www.bergsteigerdoerfer.org/index.php?rex_resize=1200c__520h__hintersee_inet.jpg'
        }}
      />
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text> 
      <Text style={styles.description} numberOfLines={2}>This place is very nice to live,There is nice lake view , you can enjoy the weather all the time </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.newPrice}> $30 </Text>
        /night
      </Text>

      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
