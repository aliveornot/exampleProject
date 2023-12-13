import { View, StyleSheet } from 'react-native';

// Try to give default value to props. It will help you to render components individually.
export default function BasicBox({ label = 'default label' }: { label: string }) {
  return <View style={styles.box}></View>;
}

const styles = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'auto',
  },
});
