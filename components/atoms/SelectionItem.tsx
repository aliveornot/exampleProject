import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function SelectionItem({
  label = 'label',
  isSelected = false,
  onSelect,
}: {
  label: string;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <TouchableOpacity style={[styles.View, isSelected ? styles.activeView : {}]}>
      <Text style={[styles.Text, isSelected ? styles.activeText : {}]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  View: {
    flexGrow: 0,
    alignSelf: 'auto',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    width: 'auto',
    height: 'auto',
    flexShrink: 0,
    flexBasis: 'auto',
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'rgba(150, 159, 255, 1)',
  },
  activeView: {
    backgroundColor: 'rgba(150, 159, 255, 1)',
  },
  Text: {
    color: 'rgb(150, 159, 255)',
    fontFamily: 'System',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: -1,
    textAlign: 'left',
    textDecorationLine: 'none',
    position: 'relative',
  },
  activeText: {
    color: 'rgb(255, 255, 255)',
  },
});
