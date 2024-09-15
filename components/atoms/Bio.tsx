import React from 'react';
import { Text, StyleSheet, View } from "react-native";

export default function Bio({ bioText = 'Data unavailable', style }){
  return (
    <View style={[styles.bioContent__container, style]}>
      <Text style={styles.bioContent__title}>Bio</Text>
      <Text style={styles.bioContent__container}>{bioText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  bioContent__title: {
    fontSize: 30,
    lineHeight: 34,
    marginBottom: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fff',
  },
  bioContent__container: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#fff',
  },
});

