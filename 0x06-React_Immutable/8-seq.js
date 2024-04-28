import { seq } from 'immutable';

export function printBestStudents(grades) {
  seq(grades)
    .filter(student => student.score >= 70)
    .forEach(student => {
      const { firstName, lastName } = student;
      console.log({
        ...student,
        firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
        lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1)
      });
    });
}
