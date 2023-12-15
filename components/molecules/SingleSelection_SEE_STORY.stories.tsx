import SingleSelection from './SingleSelection_SEE_STORY';

export default {
  component: SingleSelection,
  title: 'Molecules/SingleSelection',
};

export const SingleSelectionStory: {
  args: Parameters<typeof SingleSelection>[0];
  render: (args: Parameters<typeof SingleSelection>[0]) => JSX.Element;
} = {
  args: {
    choices: ['choice0', 'choice1', 'choice2', 'choice3', 'choice4'],
    selectedIndex: 0,
    onSelect: (index: number) => console.log('Item selected: ', index),
  },
  render: (args) => <SingleSelection {...args} />,
};
