import {
  StyleProp,
  StyleSheet,
  TouchableHighlightProps,
  View,
  ViewStyle,
} from 'react-native';

import { faFile } from '@fortawesome/pro-regular-svg-icons';
import { faCheckCircle } from '@fortawesome/pro-solid-svg-icons';
import { Icon } from '@lib/ui/components/Icon';
import { ListItem } from '@lib/ui/components/ListItem';
import { Text } from '@lib/ui/components/Text';
import { useStylesheet } from '@lib/ui/hooks/useStylesheet';
import { useTheme } from '@lib/ui/hooks/useTheme';
import { Theme } from '@lib/ui/types/theme';

interface Props {
  title: string | JSX.Element;
  subtitle?: string;
  sizeInKiloBytes?: number;
  trailingItem?: JSX.Element;
  isDownloaded: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

export const FileListItem = ({
  isDownloaded,
  subtitle,
  ...rest
}: TouchableHighlightProps & Props) => {
  const { colors, fontSizes } = useTheme();
  const styles = useStylesheet(createItemStyles);

  return (
    <ListItem
      isNavigationAction
      leadingItem={
        <View>
          <Icon icon={faFile} size={fontSizes['2xl']} style={styles.fileIcon} />
          {isDownloaded && (
            <View style={styles.downloadedIconContainer}>
              <Icon
                icon={faCheckCircle}
                size={12}
                color={colors.secondary[600]}
              />
            </View>
          )}
        </View>
      }
      subtitle={
        <View style={styles.subtitleContainer}>
          <Text
            variant="secondaryText"
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.subtitle}
          >
            {subtitle}
          </Text>
          {/* <Text
            variant="secondaryText"
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.fileSize}
          >
            {formatFileSize(sizeInKiloBytes)}
          </Text>*/}
        </View>
      }
      {...rest}
    />
  );
};

const createItemStyles = ({ spacing, colors }: Theme) =>
  StyleSheet.create({
    fileIcon: {
      color: colors.heading,
    },
    fileSize: {
      paddingLeft: spacing[1],
    },
    downloadedIconContainer: {
      padding: 2,
      borderRadius: 16,
      backgroundColor: colors.surface,
      position: 'absolute',
      bottom: -5,
      right: -2,
    },
    subtitle: {
      flexShrink: 1,
    },
    subtitleContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
