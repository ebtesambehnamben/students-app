import { useMemo } from 'react';
import { Platform, ScrollView } from 'react-native';
import { Card } from '@lib/ui/components/Card';
import { Section } from '@lib/ui/components/Section';
import { SectionHeader } from '@lib/ui/components/SectionHeader';
import { Text } from '@lib/ui/components/Text';
import { useTheme } from '@lib/ui/hooks/useTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createRefreshControl } from '../../../core/hooks/createRefreshControl';
import { useBottomBarAwareStyles } from '../../../core/hooks/useBottomBarAwareStyles';
import { TeachingStackParamList } from '../components/TeachingNavigator';
import { useGetCourseGuide } from '../hooks/courseHooks';

type Props = NativeStackScreenProps<TeachingStackParamList, 'CourseGuide'>;

export const CourseGuideScreen = ({ route }: Props) => {
  const { courseId } = route.params;
  const { spacing } = useTheme();
  const bottomBarAwareStyles = useBottomBarAwareStyles();
  const guideQuery = useGetCourseGuide(courseId);
  const guideSections = useMemo(
    () =>
      guideQuery.data?.data.map(section => ({
        ...section,
        content: section.content.replace(/(\\f|\\n)+/g, '\n\n').trim(),
      })) ?? [],
    [guideQuery],
  );

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        paddingVertical: spacing[5],
      }}
      refreshControl={createRefreshControl(guideQuery)}
      style={bottomBarAwareStyles}
    >
      {guideSections.map((section, i) => (
        <Section key={i}>
          <SectionHeader title={section.title} />
          <Card
            rounded={Platform.select({ android: false })}
            style={{
              marginVertical: spacing[2],
              marginHorizontal: Platform.select({ ios: spacing[4] }),
              paddingHorizontal: spacing[5],
              paddingVertical: spacing[5],
            }}
          >
            <Text>{section.content}</Text>
          </Card>
        </Section>
      ))}
    </ScrollView>
  );
};
