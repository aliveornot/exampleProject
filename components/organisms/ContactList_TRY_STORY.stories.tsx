import { ContactList } from './ContactList_TRY_STORY';

export default {
  component: ContactList,
  title: 'Organisms/ContactList',
};

export const Default = {
  args: {
    profiles: [
      {
        name: 'John Doe',
        phone: '+1234567890',
        imageUri: 'https://picsum.photos/64/64?random=1',
      },
      {
        name: 'Jane Smith',
        phone: '+0987654321',
        imageUri: 'https://picsum.photos/64/64?random=2',
      },
      {
        name: 'Chris Johnson',
        phone: '+1357924680',
        imageUri: 'https://picsum.photos/64/64?random=3',
      },
    ],
  },
  render: (args) => {
    return <ContactList {...args} />;
  },
};
