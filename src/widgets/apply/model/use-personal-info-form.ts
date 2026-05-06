import { useState } from 'react';

import { ACADEMIC_GRADES, MONTHS, SEMESTERS } from '@/widgets/apply/apply-dropdown';
import type { MilitaryStatus, Track } from '@/shared/api/types';

interface PersonalInfoForm {
  track: Track | null;
  name: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  email: string;
  phone: string;
  university: string;
  major: string;
  additionalDegrees: string[];
  academicGrade: string;
  semester: string;
  graduationYear: string;
  graduationMonth: string;
  militaryStatus: MilitaryStatus | null;
  gradSchoolPlan: boolean | null;
}

const INITIAL_FORM: PersonalInfoForm = {
  track: null,
  name: '',
  birthYear: '',
  birthMonth: '',
  birthDay: '',
  email: '',
  phone: '',
  university: '',
  major: '',
  additionalDegrees: [],
  academicGrade: '',
  semester: '',
  graduationYear: '',
  graduationMonth: '',
  militaryStatus: null,
  gradSchoolPlan: null,
};

const computeLastSemester = (grade: string, semester: string): number => {
  const gradeIndex = ACADEMIC_GRADES.indexOf(grade);
  const semesterIndex = SEMESTERS.indexOf(semester);
  return gradeIndex * 2 + semesterIndex + 1;
};

const stripKoreanUnit = (value: string): string => value.replace(/[년월일]/g, '').trim();
const padTwo = (n: number): string => String(n).padStart(2, '0');

export const usePersonalInfoForm = () => {
  const [form, setForm] = useState<PersonalInfoForm>(INITIAL_FORM);

  const setField = <K extends keyof PersonalInfoForm>(field: K, value: PersonalInfoForm[K]) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const addDegree = () =>
    setForm((prev) => ({ ...prev, additionalDegrees: [...prev.additionalDegrees, ''] }));

  const setDegree = (index: number, value: string) =>
    setForm((prev) => {
      const next = [...prev.additionalDegrees];
      next[index] = value;
      return { ...prev, additionalDegrees: next };
    });

  const toApiPayload = () => {
    const monthNum = MONTHS.indexOf(form.birthMonth) + 1;
    const dayNum = parseInt(stripKoreanUnit(form.birthDay));
    const gradMonthNum = MONTHS.indexOf(form.graduationMonth) + 1;

    return {
      track: form.track,
      name: form.name,
      email: form.email,
      phone: form.phone.replace(/-/g, ''),
      university: form.university,
      major: form.major,
      minor_double_major: form.additionalDegrees.filter(Boolean),
      birth_date: `${stripKoreanUnit(form.birthYear)}-${padTwo(monthNum)}-${padTwo(dayNum)}`,
      graduation_date: `${stripKoreanUnit(form.graduationYear)}-${padTwo(gradMonthNum)}`,
      last_semester: computeLastSemester(form.academicGrade, form.semester),
      military_status: form.militaryStatus,
      grad_school_plan: form.gradSchoolPlan,
    };
  };

  return { form, setField, addDegree, setDegree, toApiPayload };
};
