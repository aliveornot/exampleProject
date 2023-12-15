import SelectionItem from '../atoms/SelectionItem';
import { View, StyleSheet } from 'react-native';

export default function SingleSelection({
  choices,
  selectedIndex,
  onSelect,
}: {
  choices: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <View style={styles.View}>
      {choices.map((label, index) => (
        <SelectionItem key={index} label={label} isSelected={selectedIndex === index} onSelect={() => onSelect(index)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    padding: 10,
    flexWrap: 'wrap',
    columnGap: 8,
    rowGap: 8,
  },
});
