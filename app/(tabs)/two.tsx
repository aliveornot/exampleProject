import { StyleSheet, Text, View } from 'react-native';
import PhotoCard from '../../components/molecules/PhotoCard';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.View}>
        <Text style={styles.title}>Tab Two</Text>
      </View>
      <View style={styles.separator}>
        <PhotoCard title='PhotoCard' onNext={() => null} onPrev={() => null} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 'auto',
    alignSelf: 'stretch',
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 24,
    paddingBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 0,
    marginLeft: 0,
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  separator: {
    marginVertical: 30,
    height: 'auto',
    width: 'auto',
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'auto',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
  },
  View: {
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 'auto',
    alignSelf: 'stretch',
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    justifyContent: 'flex-start',
  },
});
