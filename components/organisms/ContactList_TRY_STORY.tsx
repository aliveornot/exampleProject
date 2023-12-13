import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ProfileCard } from '../molecules/ProfileCard';

// This file can't be rendered without given props. Try storyfile.
export function ContactList({
  profiles,
}: {
  profiles: {
    name?: string;
    phone?: string;
    imageUri?: string;
  }[];
}) {
  return (
    <ScrollView style={styles.scrollview} contentContainerStyle={styles.contentContainer}>
      {profiles.map((profile) => (
        <ProfileCard key={profile.name} name={profile.name} phone={profile.phone} imageUri={profile.imageUri} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
    flexBasis: 'auto',
    alignSelf: 'stretch',
    padding: 16,
  },
  contentContainer: { rowGap: 16 },
});
