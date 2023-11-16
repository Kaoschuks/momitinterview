import { IStudent, ISubject } from "../interfaces";

export const dummysubjects: ISubject[] = [
    { id: 1, name: 'Math', teacher: 'Mr. Favour' },
    { id: 2, name: 'Science', teacher: 'Ms. Johnson' },
    { id: 3, name: 'History', teacher: 'Mr. Davis' }
];

export const dummystudents: IStudent[] = [
    { id: 1, firstName: 'Test', lastName: 'Doe', enrolledSubjects: [1, 2] },
    { id: 2, firstName: 'Jane', lastName: 'MIst', enrolledSubjects: [2, 3] },
]