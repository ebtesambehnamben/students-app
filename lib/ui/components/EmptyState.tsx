import { StyleSheet, View } from 'react-native';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Icon } from '@lib/ui/components/Icon';
import { Text } from '@lib/ui/components/Text';
import { useStylesheet } from '@lib/ui/hooks/useStylesheet';
import { useTheme } from '@lib/ui/hooks/useTheme';
import { Theme } from '@lib/ui/types/theme';

import { globalStyles } from '../../../src/core/styles/globalStyles';

interface Props {
  icon?: IconDefinition;
  message: string;
  spacing?: keyof Theme['spacing'];
}

export const EmptyState = ({ icon, message, spacing = '12' }: Props) => {
  const { colors, fontSizes, spacing: _spacing } = useTheme();
  const styles = useStylesheet(createStyles);

  return (
    <View
      style={[
        { padding: _spacing[spacing] },
        globalStyles.grow,
        styles.container,
      ]}
    >
      {icon && (
        <Icon
          icon={icon}
          color={colors.secondaryText}
          size={fontSizes['3xl']}
          style={styles.icon}
        />
      )}
      <Text style={{ textAlign: 'center' }} variant="secondaryText">
        {message}
      </Text>
    </View>
  );
};

const createStyles = ({ spacing }: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    icon: {
      marginBottom: spacing[4],
    },
  });
