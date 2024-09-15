import React from 'react';
import { Text, StyleSheet, View } from "react-native";

export default function Name({ nameText = 'Data unavailable', titleText = 'Data unavailable', style }){
  return (
    <View style={[styles.nameContent__container, style]}>
      <Text style={styles.nameContent__name}>{nameText}</Text>
      <Text style={styles.nameContent__title}>{titleText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  nameContent__name: {
    fontSize: 30,
    lineHeight: 30,
    marginBottom: 5,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fff',
  },
  nameContent__title: {
    fontSize: 12,
    lineHeight: 12,
    marginBottom: 0,
    fontWeight: 'regular',
    letterSpacing: 0.25,
    color: '#fff',
  },
  nameContent__container: {
    fontSize: 16,
    color: '#fff',
  },
});

