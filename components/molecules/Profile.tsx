//import ProfileImage from '@/components/atoms/ProfileImage';
import React from 'react';
import { Text, StyleSheet, View, Image, useWindowDimensions } from "react-native";
import Bio from '@/components/atoms/Bio';
import Name from '@/components/atoms/Name';

export default function Profile({ bioText = 'Data unavailable', nameText = 'Data unavailable', titleText = 'Data unavailable', profileImage }) {
  const defaultProfileImage = `require('@/assets/images/adaptive-icon.png')`;
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { flexDirection: width > 1024 ? 'row' : 'column' }]}>
      <View style={styles.listItem}>
        <Name style={[styles.listText, styles.listTextName]} nameText={nameText} titleText={titleText}/>
      </View>
      <View style={[styles.listItem, { width: width > 1024 ? 500 : 300 }, { height: width > 1024 ? 380 : 200 }]}>
      <Image style={[styles.imageContent__container, { width: width > 1024 ? 500 : 300 }, { height: width > 1024 ? 380 : 200 }]} source={(profileImage || defaultProfileImage)} resizeMode='contain'></Image>
      </View>
      <View style={styles.listItem}>
        <Bio style={styles.bioContent__container} bioText={bioText} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: 50,
    gap: 20,
  },
  listItem: {
    marginBottom: 10,
  },
  listText: {
    color: '#fff',
    fontSize: 16,
  },
  listTextName: {
    alignItems: 'flex-start',
  },
  imageContent__container: {
    width: 500,
    height: 500,
  },
  bioContent__container: {
    flex: 1,
    maxWidth: 300,
    color: '#fff',
  },
});