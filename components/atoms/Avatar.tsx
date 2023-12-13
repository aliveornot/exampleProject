import { View, StyleSheet, ImageBackground } from 'react-native';

export function Avatar({ imageUri = 'https://picsum.photos/64/64' }: { imageUri?: string }) {
  return <ImageBackground style={styles.View} source={{ uri: imageUri }} imageStyle={styles.ImageBackground}></ImageBackground>;
}
const styles = StyleSheet.create({
  View: {
    flexGrow: 0,
    alignSelf: 'auto',
    width: 64,
    height: 64,
    flexShrink: 0,
    flexBasis: 'auto',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    borderBottomRightRadius: 32,
    borderBottomLeftRadius: 32,
    overflow: 'hidden',
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  ImageBackground: { width: '100%', height: '100%' },
});
