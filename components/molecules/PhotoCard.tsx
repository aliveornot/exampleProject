import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

function PhotoCard({
  title = 'title here',
  imageUri = 'https://images.unsplash.com/photo-1702288135917-bcb48253d2eb',
  onNext = () => null,
  onPrev = () => null,
}: {
  title: string;
  imageUri: string;
  onNext?: () => void;
  onPrev?: () => void;
}) {
  return (
    <>
      <ImageBackground style={styles.View} source={{ uri: imageUri }} imageStyle={styles.ImageBackground}>
        <View style={styles.View_1}>
          <TouchableOpacity onPress={onPrev} style={styles.TouchableOpacity}>
            <AntDesign name={'left'} size={24} color={'white'} />
          </TouchableOpacity>
          <View style={styles.View_3}>
            <View style={styles.View_2}>
              <Text style={styles.Text}>{title}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={onNext} style={styles.TouchableOpacity_1}>
            <AntDesign name={'right'} size={24} color={'white'} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}

export default PhotoCard;

const styles = StyleSheet.create({
  View: {
    width: 'auto',
    alignSelf: 'stretch',
    backgroundColor: 'black',
    height: 512,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    top: 0,
    left: 0,
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  View_1: {
    width: 'auto',
    height: 'auto',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    alignSelf: 'stretch',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  TouchableOpacity: {
    width: 64,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    height: 'auto',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  TouchableOpacity_1: {
    width: 64,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    height: 'auto',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  Text: {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'System',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: -1,
    textAlign: 'center',
    textDecorationLine: 'none',
    height: 'auto',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
  },
  View_2: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'center',
    height: 64,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
  },
  ImageBackground: { width: '100%', height: '100%' },
  View_3: {
    width: 'auto',
    height: 'auto',
    alignItems: 'stretch',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
  },
});
