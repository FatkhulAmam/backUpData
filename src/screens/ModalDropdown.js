import * as React from 'react';
import {List} from 'react-native-paper';
import {richData} from '../data/richandmorty';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  React.useEffect(() => {
    console.log(richData);
  });

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Accordions">
      <List.Accordion title="Uncontrolled Accordion">
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
  );
};

export default MyComponent;
