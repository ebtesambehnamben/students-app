import { useContext } from 'react';
import { CachesDirectoryPath } from 'react-native-fs';

import { useGetStudent } from '../../../core/queries/studentHooks';
import { CourseContext } from '../contexts/CourseContext';

export const useCourseFilesCache = () => {
  const { data: student } = useGetStudent();
  const courseId = useContext(CourseContext);

  return [CachesDirectoryPath, student.data.username, 'Courses', courseId].join(
    '/',
  );
};

export const useCoursesFilesCache = () => {
  return CachesDirectoryPath;
};
