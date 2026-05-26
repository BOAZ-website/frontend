import { ACADEMIC_GRADES, SEMESTERS } from '@/widgets/apply/apply-dropdown';

export const parseBirthDate = (birthDate: string) => {
  const [year, month, day] = birthDate.split('-');
  return {
    birthYear: `${year}년`,
    birthMonth: `${parseInt(month)}월`,
    birthDay: `${parseInt(day)}일`,
  };
};

export const parseGraduationDate = (graduationDate: string) => {
  const [year, month] = graduationDate.split('-');
  return {
    graduationYear: `${year}년`,
    graduationMonth: `${parseInt(month)}월`,
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
