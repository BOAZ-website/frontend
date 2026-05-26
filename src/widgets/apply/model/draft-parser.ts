import { ACADEMIC_GRADES, SEMESTERS } from '@/widgets/apply/apply-dropdown';

export const parseBirthDate = (birthDate: string) => {
  const match = birthDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) {
    return { birthYear: '', birthMonth: '', birthDay: '' };
  }
  const [, year, month, day] = match;
  return {
    birthYear: `${year}년`,
    birthMonth: `${Number(month)}월`,
    birthDay: `${Number(day)}일`,
  };
};

export const parseGraduationDate = (graduationDate: string) => {
  const match = graduationDate.match(/^(\d{4})-(\d{2})$/);
  if (!match) {
    return { graduationYear: '', graduationMonth: '' };
  }
  const [, year, month] = match;
  return {
    graduationYear: `${year}년`,
    graduationMonth: `${Number(month)}월`,
  };
};

export const parseLastSemester = (lastSemester: number) => {
  const gradeIndex = Math.floor((lastSemester - 1) / 2);
  const semesterIndex = (lastSemester - 1) % 2;
  return {
    academicGrade: ACADEMIC_GRADES[gradeIndex] ?? '',
    semester: SEMESTERS[semesterIndex] ?? '',
  };
};
