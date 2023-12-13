import { View, Text, StyleSheet } from 'react-native';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.View}>
        <Text style={styles.title}>{`Modal Screen`}</Text>
        <Text style={styles.Text}>{`This screen is a modal.`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    alignSelf: 'stretch',
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    marginRight: 0,
    marginLeft: 0,
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 24,
    paddingBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgb(0, 0, 0)',
    fontFamily: 'System',
    fontStyle: 'normal',
    letterSpacing: 0,
    lineHeight: -1,
    textAlign: 'left',
    textDecorationLine: 'none',
  },
  separator: {
    marginVertical: 30,
    height: 1,
  },
  View: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 'auto',
    alignSelf: 'stretch',
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    marginRight: 0,
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 24,
    paddingBottom: 24,
    justifyContent: 'center',
    rowGap: 12,
  },
  Text: {
    fontSize: 20,
    fontWeight: '400',
    color: 'rgb(0, 0, 0)',
    fontFamily: 'System',
    fontStyle: 'normal',
    letterSpacing: 0,
    lineHeight: -1,
    textAlign: 'left',
    textDecorationLine: 'none',
  },
});
