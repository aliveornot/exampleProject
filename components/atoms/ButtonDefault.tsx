import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ButtonDefault({ onPress = () => {}, label = 'label' }: { onPress: () => void; label: string }) {
  return (
    <TouchableOpacity style={styles.ButtonOutermost}>
      <Text style={styles.LabelText}>{`Text`}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ButtonOutermost: {
    width: 'auto',
    alignSelf: 'stretch',
    height: 64,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    backgroundColor: 'rgba(68, 170, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  LabelText: {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'System',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: -1,
    textAlign: 'left',
    textDecorationLine: 'none',
    position: 'relative',
  },
});
