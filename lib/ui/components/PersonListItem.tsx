import { Image, StyleSheet, TouchableHighlightProps } from 'react-native';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Icon } from '@lib/ui/components/Icon';
import { ListItem } from '@lib/ui/components/ListItem';
import { useTheme } from '@lib/ui/hooks/useTheme';
import { Person } from '@polito/api-client/models/Person';

interface Props {
  person: Person | undefined;
  subtitle?: string | JSX.Element;
  navigateEnabled?: boolean;
  isCrossNavigation?: boolean;
}

export const PersonListItem = ({
  person,
  subtitle,
  navigateEnabled = true,
  isCrossNavigation = false,
}: TouchableHighlightProps & Props) => {
  const { fontSizes } = useTheme();

  return (
    <ListItem
      leadingItem={
        person?.picture ? (
          <Image source={{ uri: person.picture }} style={styles.picture} />
        ) : (
          <Icon icon={faUser} size={fontSizes['2xl']} />
        )
      }
      title={person ? `${person.firstName} ${person.lastName}` : ''}
      accessibilityLabel={
        person
          ? `${subtitle}: ${person.firstName} ${person.lastName}`
          : undefined
      }
      linkTo={
        person?.id && navigateEnabled
          ? {
              screen: 'ServicesTab',
              params: {
                screen: 'Person',
                params: { id: person.id, isCrossNavigation },
                initial: false,
              },
            }
          : undefined
      }
      subtitle={subtitle}
    />
  );
};

const styles = StyleSheet.create({
  picture: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});
