import React from 'react';
import { Text, StyleSheet, Image, View } from "react-native";

export default function ProfileImage({ profileImage = 'Data unavailable', style }){
  return (
    <View style={[styles.image__container, style]}>
      <Image style={styles.image} source={profileImage} resizeMode='contain'></Image>
    </View>
  )
}


const styles = StyleSheet.create({
  image__container: {
    width: 'auto',
  },
  image: {
    width: '50%',
    height: undefined,
    aspectRatio: 1,
  },
});