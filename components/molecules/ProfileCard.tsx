import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar } from '../atoms/Avatar';

export function ProfileCard({
  name = 'John Doe',
  phone = '+1234567890',
  imageUri = 'https://i.pravatar.cc/64',
}: {
  name?: string;
  phone?: string;
  imageUri?: string;
}) {
  return (
    <View style={styles.container}>
      <Avatar imageUri={imageUri} />
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.phoneText}>{phone}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    shadowColor: '#00000044',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    width: 'auto',
    alignSelf: 'stretch',
    columnGap: 24,
  },
  infoContainer: {
    justifyContent: 'center',
    flex: 1,
    rowGap: 4,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  phoneText: {
    fontSize: 14,
    color: '#000',
  },
});

// Exporting component with default props
export default ProfileCard;
